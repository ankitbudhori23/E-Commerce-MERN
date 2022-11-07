import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  margin: auto;
  width: 300px;
  padding: 20px;
  background-color: white;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  width: 100%;
  margin: 5px 0;
  padding: 12px;
  outline: none;
  font-size: 16px;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const nava = useHistory();
  const submit = async () => {
    if (name && email && password) {
      if (password === cpassword) {
        await fetch(`https://9z2c0z.sse.codesandbox.io/auth/register`, {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.data) {
              console.log("data", res);
              alert("Successfully Registered");
              nava.push("/login");
            } else {
              alert(res.error);
            }
          });
      } else {
        alert("Password and Confirm password are not matching");
      }
    } else {
      alert("All fields are required");
    }
  };
  return (
    <>
      <Navbar />
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Input
          placeholder="Full name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <Input
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="confirm password"
          value={cpassword}
          onChange={(e) => setcpassword(e.target.value)}
        />
        <Button onClick={submit}>CREATE</Button>
      </Wrapper>
    </>
  );
};

export default Register;
