import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { BaseColor, Card, FormControl, Button } from "../utils/style";

const sliderAnimeTop = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const LoginStyle = styled(BaseColor)`
  animation: ${sliderAnimeTop} 1s linear;
  margin-top: 4rem;
  height: 50vh;
  position: relative;
  ::before,
  ::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2rem;
    height: 100px;
    transform: skewY(-2deg);
    background-color: white;
    z-index: 1;
  }
`;

const Form = styled.form``;

const CardStyle = styled(Card)`
  width: 500px;
  height: 300px;
  max-width: 96%;
  margin: 0 auto;
  position: relative;
  bottom: -70px;
  z-index: 100;
  padding: 3rem;
  h3 {
    font-size: large;
    margin-top: 1rem;
    span {
      a {
        color: #0084ff;
        text-decoration: underline;
      }
    }
  }
`;

const Login = () => {
  return (
    <LoginStyle>
      <CardStyle>
        <h2>Login</h2>
        <Form>
          <FormControl>
            <input type="email" name="email" placeholder="Email" required />
          </FormControl>
          <FormControl>
            <input
              type="password"
              name="name"
              placeholder="Password"
              required
            />
          </FormControl>
          <Button type="submit">Submit</Button>
        </Form>
        <h3>
          Don't Have An Account?{" "}
          <span>
            <Link to="/register">Register</Link>
          </span>
        </h3>
      </CardStyle>
    </LoginStyle>
  );
};

export default Login;
