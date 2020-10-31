import React from "react";
import styled from "styled-components";
import { Container, Flex } from "../utils/style";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

const FooterClass = styled.footer`
  background-color: #030c27;
  color: white;
`;

const ContainerWrapper = styled(Container)`
  height: 30vh;
`;

const FlexWrapper = styled(Flex)`
  height: 100%;
  justify-content: space-evenly;
  div {
    p {
      margin: 0.8rem 0;
      font-size: small;
    }
    text-align: center;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 0;
  }
`;

const Social = styled(Flex)`
  a {
    .MuiSvgIcon-root {
      color: white;
      margin: 0 0.5rem;
      transform: scale(1.2);
    }
  }
`;

const Footer = () => {
  return (
    <FooterClass>
      <ContainerWrapper>
        <FlexWrapper>
          <div>
            <h2>ProLearner</h2>
            <p>Copyright &copy; 2020</p>
          </div>
          <Social>
            <a href="https://www.twitter.com" target="_blank">
              <TwitterIcon />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <InstagramIcon />
            </a>
            <a href="https://www.github.com" target="_blank">
              <GitHubIcon />
            </a>
          </Social>
        </FlexWrapper>
      </ContainerWrapper>
    </FooterClass>
  );
};

export default Footer;
