import React from "react";
import styled from "styled-components";
import { Card, Container, Img } from "../utils/style";

const Language = styled.section`
  color: #111010;
  padding: 1.7rem 0;
  h1 {
    text-align: center;
    margin: 0 0 1.5rem 0;
    font-weight: 600;
  }
`;

const ContainerWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  flex-wrap: wrap;
  h4 {
    text-align: center;
  }
`;
const CardWrapper = styled(Card)`
  transition: 0.2s ease-in all;
  &:hover {
    transform: translateY(-12px);
  }
`;

const Languages = () => {
  return (
    <Language>
      <h1>Languages We Speak</h1>
      <ContainerWrapper>
        <CardWrapper>
          <h4>Node.js</h4>
          <Img height="90px" src="./images/logos/node.png" alt="node" />
        </CardWrapper>
        <CardWrapper>
          <h4>Python</h4>
          <Img height="90px" src="./images/logos/python.png" alt="python" />
        </CardWrapper>
        <CardWrapper>
          <h4>Go</h4>
          <Img height="90px" src="./images/logos/go.png" alt="go" />
        </CardWrapper>
        <CardWrapper>
          <h4>Ruby</h4>
          <Img height="90px" src="./images/logos/ruby.png" alt="ruby" />
        </CardWrapper>
        <CardWrapper>
          <h4>Scala</h4>
          <Img height="90px" src="./images/logos/scala.png" alt="scala" />
        </CardWrapper>
        <CardWrapper>
          <h4>C#</h4>
          <Img height="90px" src="./images/logos/csharp.png" alt="csharp" />
        </CardWrapper>
        <CardWrapper>
          <h4>Clojure</h4>
          <Img height="90px" src="./images/logos/clojure.png" alt="clojure" />
        </CardWrapper>
        <CardWrapper>
          <h4>JavaScript</h4>
          <Img
            height="90px"
            src="./images/logos/js.png"
            width="90px"
            alt="php"
          />
        </CardWrapper>
      </ContainerWrapper>
    </Language>
  );
};

export default Languages;
