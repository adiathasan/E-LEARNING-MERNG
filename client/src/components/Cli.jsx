import React from "react";
import styled from "styled-components";
import { Card, Container, Grid } from "../utils/style";

const CliSec = styled.div`
  margin: 1.2rem auto;
  @media (max-width: 786px) {
    margin: 5rem auto;
  }
`;
const GridWrapper = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(2, 1fr);
  img {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  } */
  @media (max-width: 786px) {
    grid-template-columns: 1fr;
    margin-top: 2rem auto;
  }
  h3 {
    text-align: center;
  }
`;

const Cli = () => {
  return (
    <CliSec>
      <GridWrapper>
        <Card>
          <h3>Learning Made Easy</h3>
        </Card>

        <Card>
          <h3>Be A Pro In Years</h3>
        </Card>
        <img src="images/cli.png" alt="cli" />
      </GridWrapper>
    </CliSec>
  );
};

export default Cli;
