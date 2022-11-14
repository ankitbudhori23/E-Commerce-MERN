import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../Features/Userslice";
import { useDispatch } from "react-redux";
import { logout } from "../Features/Userslice";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  background-color: #35b3f9;
  color: white;
  height: 60px;
  padding-top: 10px;
`;

const Wrapper = styled.div`
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid black;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  color: white;
  margin-left: 25px;
`;

const Navbar = () => {
  const cat = JSON.parse(localStorage.getItem("cart"));
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logouta = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    dispatch(logout());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>E-comm</Logo>
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
          {user?.user ? (
            <>
              <MenuItem style={{ fontSize: "19px", paddingRight: "30px" }}>
                {user?.user.name}
              </MenuItem>
              <Button
                onClick={logouta}
                style={{ fontSize: "12px" }}
                color="primary"
                variant="contained"
              >
                Log out
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <Button
                  style={{ fontSize: "12px", marginRight: "20px" }}
                  color="primary"
                  variant="contained"
                >
                  Sign In
                </Button>
              </Link>
              <Link
                to="/register"
                style={{ color: "black", textDecoration: "none" }}
              >
                <Button
                  style={{ fontSize: "12px" }}
                  color="primary"
                  variant="contained"
                >
                  Register
                </Button>
              </Link>
            </>
          )}
          <Link to={"/cart"}>
            <MenuItem>
              <Badge
                badgeContent={cat?.length ? cat?.length : "0"}
                color="primary"
              >
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
