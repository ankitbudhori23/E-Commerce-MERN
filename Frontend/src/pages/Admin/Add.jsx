import { useState } from "react";
import "../Style.css";
export default function Add() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState("");
  const [img, setimg] = useState("");
  const [categories, setcat] = useState("");

  const submit = async () => {
    if (title && desc && price && img && categories) {
      await fetch(`https://9z2c0z.sse.codesandbox.io/product/`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          desc,
          price,
          img,
          categories
        })
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            // console.log("data", res);
            alert("Product Added Successfully");
            settitle("");
            setimg("");
            setdesc("");
            setprice("");
            setcat("");
          } else {
            alert(res.error);
          }
        });
    } else {
      alert("All fields are required");
    }
  };
  return (
    <div className="add">
      <h1>ADD PRODUCTS</h1>
      <input
        className="add-p"
        placeholder="Product Name"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <input
        className="add-p"
        placeholder="Product Description"
        value={desc}
        onChange={(e) => setdesc(e.target.value)}
      />
      <input
        className="add-p"
        placeholder="Product Price"
        type="number"
        value={price}
        onChange={(e) => setprice(e.target.value)}
      />
      <input
        className="add-p"
        value={img}
        placeholder="Product Image URL"
        onChange={(e) => setimg(e.target.value)}
      />
      <input
        className="add-p"
        value={categories}
        placeholder="Product Category"
        onChange={(e) => setcat(e.target.value)}
      />
      <button className="add-pb" onClick={submit}>
        Add
      </button>
    </div>
  );
}
