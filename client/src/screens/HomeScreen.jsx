import React from "react";
import styled from "styled-components";
import Cli from "../components/Cli.jsx";
import Flexibility from "../components/Flexibility.jsx";
import Languages from "../components/Languages.jsx";
import ShowCase from "../components/ShowCase.jsx";
import Stats from "../components/Stats.jsx";
import { Container, BaseColor } from "../utils/style";

const HomeScreenSection = styled.div`
  padding-top: 1rem;
  color: white;
`;

const HomeScreen = () => {
  return (
    <HomeScreenSection>
      <ShowCase />
      <Container>
        <Stats />
        <Cli />
      </Container>
      <Flexibility />
      <Languages />
    </HomeScreenSection>
  );
};

export default HomeScreen;
