import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Style.css";

const Success = () => {
  const [order, setorder] = useState();
  const ad = JSON.parse(sessionStorage.getItem("order"));
  useEffect(() => {
    ad && setorder(ad);
  }, []);

  return (
    <>
      <Navbar />
      <div className="succ_div">
        <div className="s_head">Order Placed successfully!</div>
        <div className="s_oid">
          Your Order Id is <span>{order?._id}</span>
        </div>
        <div className="s_aa">Delivery Address</div>
        <div className="s_a">{order?.address}</div>
        <div className="s_a">{order?.city}</div>
        <div className="s_a">{order?.state}</div>
        <div className="s_a">{order?.zip}</div>
        <br />
        <Link to="/" className="a">
          <button
            onClick={() => sessionStorage.removeItem("order")}
            className="succ_btn"
          >
            CONTINUE SHOPPING
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Success;
