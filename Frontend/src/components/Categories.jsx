import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const All = styled.div`
  background-color: #000d;
  padding: 20px;
  color: white;
  font-size: 22px;
  margin: 22px;
  cursor: pointer;
  text-align: center;
  letter-spacing: 1px;
`;
const Categories = () => {
  const a = useHistory();
  return (
    <>
      <All onClick={() => a.push("/all")}>View All Products</All>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
