import styled from "styled-components";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
const Container = styled.div``;

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin: 20px;
`;
const Co = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [adata, setadata] = useState([]);

  useEffect(() => {
    const gdata = () => {
      fetch(`https://9z2c0z.sse.codesandbox.io/product/find/${cat}`, {
        method: "GET",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((res) => {
          // console.error("data", res);
          setadata(res.data);
        });
    };
    gdata();
  }, []);

  return (
    <Container>
      <Navbar />
      <Title>{cat}</Title>
      <Co>
        {adata.map((e) => (
          <Product item={e} />
        ))}
      </Co>
      <Footer />
    </Container>
  );
};

export default ProductList;
