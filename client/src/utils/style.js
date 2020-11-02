import styled from "styled-components";

const BaseColor = styled.div`
  background-color: #0278bd;
  color: white;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2.6rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ span }) => span}, 1fr);
  gap: ${({ space }) => (space ? space : "10%")};
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.3);
  color: #333;
`;

const Button = styled.button`
  padding: 0.7rem 1.4rem;
  border-radius: 6px;
  border: 0;
  outline: none;
  color: white;
  background-color: #0278bd;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    color: white;
    background-color: #0249bd;
    transform: scale(0.99);
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

const ButtonOutline = styled(Button)`
  border: 0.16rem solid white;
  background-color: transparent;
`;

const ButtonOutlineDark = styled(Button)`
  border: 0.16rem solid white;
  background-color: #001229fa;
  &:hover {
    color: white;
    background-color: transparent;
    transform: scale(0.99);
  }
`;

const Img = styled.img`
  object-fit: contain;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
`;

const FormControl = styled.div`
  margin: 1.2rem 0;
  input {
    border: 0;
    outline: none;
    border-bottom: 1px solid #0299bd;
    width: 100%;
    padding: 0.2rem;
  }
`;

export {
  Container,
  Img,
  ButtonOutline,
  Card,
  Button,
  FormControl,
  BaseColor,
  Grid,
  ButtonOutlineDark,
  Flex,
  FlexColumn,
};
