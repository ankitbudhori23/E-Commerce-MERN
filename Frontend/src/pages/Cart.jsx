import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Remove from "../components/Remove";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Info = styled.div`
  background-color: ;
  font-size: 39px;
  text-align: center;
  padding: 50px;
  margin-top: 80px;
  margin-bottom: 90px;
`;

const Hr = styled.hr`
  background-color: #0003;
  border: none;
  height: 2px;
  margin-top: 10px;
`;

const Co = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Cart = () => {
  const [cart, setcart] = useState([]);
  const car = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    if (car) {
      setcart(car);
    }
  }, []);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>CART</Title>
        <Hr />
        {!cart.length ? (
          <Info>Your Cart in Empty</Info>
        ) : (
          <>
            <Co>
              {cart?.map((e) => (
                <Remove item={e} />
              ))}
            </Co>
            <Top>
              <Link to="/">
                <TopButton>CONTINUE SHOPPING</TopButton>
              </Link>
              <Link to="/checkout">
                <TopButton>CHECK OUT</TopButton>
              </Link>
            </Top>
          </>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
