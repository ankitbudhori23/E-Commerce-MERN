import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../Features/Userslice";
import "./Style.css";
import { useHistory } from "react-router-dom";

const Checkout = () => {
  var aa;
  const user = useSelector(selectUser);
  // const [cart, setcart] = useState([]);
  const car = JSON.parse(localStorage.getItem("cart"));
  // useEffect(() => {
  if (car) {
    aa = car.map((a) => a._id);
  }
  // }, []);
  const his = useHistory();
  const [text, settext] = useState({
    products: aa,
    userId: user.user._id,
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  });
  const handleChange = ({ currentTarget: input }) => {
    settext({ ...text, [input.name]: input.value });
  };

  const submit = async () => {
    // console.log(text,cart);
    if (
      text.firstname &&
      text.email &&
      text.zip &&
      text.state &&
      text.address
    ) {
      await fetch(`https://9z2c0z.sse.codesandbox.io/order/`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(text)
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            console.log("data", res);
            sessionStorage.setItem("order", JSON.stringify(res.data));
            localStorage.removeItem("cart");
            his.push("/success");
          } else {
            alert(res.error);
          }
        });
    } else {
      alert("All fields are required");
    }
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="s_head">Shipping Address</div>
      <div className="checkout">
        <div className="name">
          <input
            className="input fr"
            placeholder="First Name"
            type="text"
            name="firstname"
            value={text.firstname}
            onChange={handleChange}
          />
          <input
            className="input"
            placeholder="Last Name"
            type="text"
            name="lastname"
            value={text.lastname}
            onChange={handleChange}
          />
        </div>
        <input
          className="input"
          placeholder="Email"
          type="email"
          name="email"
          value={text.email}
          onChange={handleChange}
        />
        <input
          className="input"
          placeholder="Full address"
          type="text"
          name="address"
          value={text.address}
          onChange={handleChange}
        />
        <input
          className="input"
          placeholder="City"
          type="text"
          name="city"
          value={text.city}
          onChange={handleChange}
        />
        <input
          className="input"
          placeholder="State"
          type="text"
          name="state"
          value={text.state}
          onChange={handleChange}
        />
        <input
          className="input"
          placeholder="ZIP"
          type="text"
          name="zip"
          value={text.zip}
          onChange={handleChange}
        />

        <button className="btn-sub" onClick={submit}>
          Submit
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
