import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Container = styled.div`
  margin: 10px;
  width: 250px;
  height: 350px;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  box-shadow: 0 0 20px -5px gray;
`;
const Price = styled.div`
  padding: 5px;
  font-size: 20px;
`;
const Desc = styled.div`
  padding: 5px;
  font-size: 15px;
`;
const Image = styled.img`
  height: 60%;
  z-index: 2;
  display: block;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Product = ({ item }) => {
  const aa = useHistory();
  const loc = localStorage.getItem("user");
  const [cart, setcart] = useState([]);
  const car = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    if (car) {
      setcart(car);
    }
  }, []);

  const buy = (a) => {
    if (loc) {
      if (cart.find((x) => x._id === a._id)) {
        alert("Item already added in cart");
      } else {
        aa.push("/cart");
        localStorage.setItem("cart", JSON.stringify([...cart, a]));
      }
    } else {
      alert("Sign In to Proceed");
    }
  };
  return (
    <Container>
      <Image src={item.img} />
      <br />
      <h3>{item.title}</h3>
      <Price>Rs {item.price}</Price>
      <Desc>{item.desc}</Desc>
      <Button
        onClick={() => buy(item)}
        style={{ width: "100%" }}
        color="primary"
        variant="contained"
      >
        Add to cart
      </Button>
    </Container>
  );
};

export default Product;
