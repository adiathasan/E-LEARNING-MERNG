import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseColor, ButtonOutlineDark, Container, Img } from "../utils/style";

const Flexible = styled(BaseColor)`
  background-color: #0c67df;
  padding: 1.4rem 0;
  height: 45vh;
  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`;

const ContainerWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0;
  }
`;

const HelperText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
  h5 {
    margin: 1rem 0;
    font-size: large;
  }
  @media (max-width: 700px) {
    margin-bottom: 1.5rem;
  }
`;

const Flexibility = () => {
  return (
    <Flexible>
      <ContainerWrapper>
        <HelperText>
          <h1>Ultimate Experience</h1>
          <h5>Parallel Learning. Code While You Learn!</h5>
          <Link to="/sandbox">
            <ButtonOutlineDark> Check Sandbox </ButtonOutlineDark>
          </Link>
        </HelperText>
        <div>
          <Img src="./images/cloud.png" width={"300px"} alt="cloud" />
        </div>
      </ContainerWrapper>
    </Flexible>
  );
};

export default Flexibility;
