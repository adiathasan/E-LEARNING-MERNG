import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Container, BaseColor } from "../utils/style";

const Header = styled(BaseColor)`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  transition: all 0.3s linear;
  background-color: ${({ active }) => active && "#0a50acfa"};
  width: 100%;
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 4rem;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
    margin-top: 0.4rem;
  }
`;

const Nav = styled.div`
  @media (max-width: 500px) {
    background-color: rgba(0, 0, 0, 0.712);
    padding: 1rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    transition: all linear 0.3s;
  }
`;

const Lk = styled(NavLink)`
  color: white;
  padding: 0.2rem 1rem;
  padding-bottom: 1.2rem;
  transition: all linear 0.3s;
  &:hover {
    opacity: 0.95;
    color: #cfd2e0;
  }
`;

const Navbar = () => {
  const [active, setActive] = useState(false);
  const changeOnScroll = () => {
    if (window.scrollY >= 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  window.addEventListener("scroll", changeOnScroll);

  return (
    <Header active={active}>
      <NavContainer>
        <h1>ProLearner</h1>
        <Nav>
          <Ul>
            <li>
              <Lk to="/" exact>
                Home
              </Lk>
            </li>
            <li>
              <Lk to="/courses">Courses</Lk>
            </li>
            <li>
              <Lk to="/sandbox">Sandbox</Lk>
            </li>
          </Ul>
        </Nav>
      </NavContainer>
    </Header>
  );
};

export default Navbar;
