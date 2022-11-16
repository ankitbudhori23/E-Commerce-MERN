import { useState, useEffect } from "react";
export default function View() {
  const [data, setdata] = useState([]);

  const gdata = () => {
    fetch(`https://9z2c0z.sse.codesandbox.io/product/`, {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        // console.error("data", res);
        setdata(res.data);
      });
  };

  useEffect(() => {
    gdata();
  }, []);

  const deletepro = async (e) => {
    await fetch(`https://9z2c0z.sse.codesandbox.io/product/${e}`, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        gdata();
        alert(res);
      });
  };

  return (
    <>
      <table style={{ textAlign: "center", margin: "auto" }}>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
        {data.map((e) => (
          <tr>
            <td>{e.title}</td>
            <td>{e.desc}</td>
            <td>{e.price}</td>
            <td>{e.categories}</td>
            <td>
              <img style={{ width: "100px" }} src={e.img} />
            </td>
            <td>
              <button onClick={() => deletepro(e._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}
