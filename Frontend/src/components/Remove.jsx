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

const Remove = ({ item }) => {
  const aa = useHistory();
  const [cart, setcart] = useState([]);
  const car = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    if (car) {
      setcart(car);
    }
  }, []);

  const remove = (a) => {
    const deleteitem = cart.filter((task) => {
      return task._id !== a;
    });
    setcart(deleteitem);
    window.location.reload();
    localStorage.setItem("cart", JSON.stringify(deleteitem));
  };

  return (
    <Container>
      <Image src={item.img} />
      <br />
      <h3>{item.title}</h3>
      <Price>Rs {item.price}</Price>
      <Desc>{item.desc}</Desc>
      <Button
        onClick={() => remove(item._id)}
        style={{ width: "100%" }}
        color="primary"
        variant="contained"
      >
        Remove from cart
      </Button>
    </Container>
  );
};

export default Remove;
