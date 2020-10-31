import React from "react";
import { Button, ButtonOutline, Card, FormControl, Grid } from "../utils/style";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ShowCaseSection = styled(Grid)`
  grid-template-columns: 55% 35%;
  height: 350px;
  margin: auto;
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 100px;
    bottom: -80px;
    right: 0;
    left: 0;
    transform: skewY(-3deg);
    -webkit-transform: skewY(-3deg);
    -moz-transform: skewY(-3deg);
    -ms-transform: skewY(-3deg);
    background: white;
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
    height: auto;
    margin-top: 5rem;
    text-align: center;
    /* div {
      margin: 0 auto;
    } */
  }
`;

const CardWrapper = styled(Card)`
  position: relative;
  top: 3.5rem;
  height: 280px;
  padding: 40px;
  z-index: 100;
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
    <ShowCaseSection>
      <div>
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
  );
};

export default ShowCase;
