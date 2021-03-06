import React from "react";
import {
  BaseColor,
  Button,
  ButtonOutline,
  Card,
  Container,
  FormControl,
  Grid,
} from "../utils/style";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const sliderAnimeLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;

  }
`;

const sliderAnimeRight = keyframes`
  0% {
    transform: translateX(100vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const BaseColorMap = styled(BaseColor)`
  position: relative;
`;

const ShowCaseSection = styled(Grid)`
  grid-template-columns: 55% 35%;
  height: 350px;
  margin: auto;
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 100px;
    top: 90%;
    right: 0;
    left: 0;
    transform: skewY(-3deg);
    -webkit-transform: skewY(-3deg);
    -moz-transform: skewY(-3deg);
    -ms-transform: skewY(-3deg);
    background: white;
  }
  .animation {
    animation: ${sliderAnimeLeft} 1s linear;
  }
  div {
    width: auto;
    max-width: 96%;
  }
  .h1 {
    margin: 0 0 10px 0;
  }
  .p {
    margin: 1rem 0;
  }
  @media (max-width: 786px) {
    grid-template-columns: 1fr;
    padding-top: 1rem;
    height: auto;
    margin-top: 2.9rem;
    text-align: center;
  }
  @media (max-width: 500px) {
    padding-top: 3rem;
  }
`;

const CardWrapper = styled(Card)`
  position: relative;
  top: 3.5rem;
  height: 280px;
  padding: 40px;
  z-index: 100;
  animation: ${sliderAnimeRight} 1s linear;
  @media (max-width: 786px) {
    width: 450px;
    height: 250px;
    max-width: 90%;
    top: 0rem;
    justify-self: center;
  }
`;

const Form = styled.form``;

const ShowCase = () => {
  return (
    <BaseColorMap>
      <Container>
        <ShowCaseSection>
          <div className="animation">
            <h1 className="h1">Easy Enrollment</h1>
            <p className="p">Complete MERN Track Path. Now Available!</p>
            <Link to="/item-id">
              <ButtonOutline>Learn More</ButtonOutline>
            </Link>
          </div>
          <CardWrapper>
            <h2 className="h1">Request Syllabus</h2>
            <Form>
              <FormControl>
                <input type="text" name="name" placeholder="Name" required />
              </FormControl>
              <FormControl>
                <input type="email" name="email" placeholder="Email" required />
              </FormControl>
              <Button type="submit">Request</Button>
            </Form>
          </CardWrapper>
        </ShowCaseSection>
      </Container>
    </BaseColorMap>
  );
};

export default ShowCase;
