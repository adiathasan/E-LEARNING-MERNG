import React from "react";
import styled from "styled-components";
import Cli from "../components/Cli.jsx";
import Flexibility from "../components/Flexibility.jsx";
import Footer from "../components/Footer.jsx";
import Languages from "../components/Languages.jsx";
import ShowCase from "../components/ShowCase.jsx";
import Stats from "../components/Stats.jsx";
import { Container, BaseColor } from "../utils/style";

const HomeScreenSection = styled(BaseColor)`
  padding-top: 1rem;
  height: 330px;
  color: white;
  position: relative;
`;

const HomeScreen = () => {
  return (
    <HomeScreenSection>
      <Container>
        <ShowCase />
        <Stats />
        <Cli />
      </Container>
      <Flexibility />
      <Languages />
      <Footer />
    </HomeScreenSection>
  );
};

export default HomeScreen;
