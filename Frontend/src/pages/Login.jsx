import { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Features/Userslice";

const Wrapper = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
  margin: auto;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 12px;
  outline: none;
  font-size: 17px;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    cursor: not-allowed;
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const aa = useHistory();
  const handleClick = async () => {
    if (email && password) {
      await fetch(`https://9z2c0z.sse.codesandbox.io/auth/login`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            // console.log("data", res);
            localStorage.setItem("user", JSON.stringify({user:res.data}));
            dispatch(
              login({
                user: res.data
              })
            );
            aa.push("/");
          } else {
            alert(res.message);
            setpassword("");
          }
        });
    } else {
      alert("All fields are required");
    }
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Title>SIGN IN</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <Button onClick={handleClick}>LOGIN</Button>
      </Wrapper>
    </>
  );
};

export default Login;
