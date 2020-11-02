import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseColor, Card, Container, Flex, Grid, Img } from "../utils/style";

const CourseStyle = styled(BaseColor)`
  margin-top: 4rem;
`;

const ContainerWrapper = styled(Container)`
  padding-bottom: 1rem;
  text-align: center;
  h1 {
    padding: 3rem 0 1rem 0;
    font-size: 1.5rem;
  }
`;
const Main = styled(Flex)`
  justify-content: space-between;
  margin: 2rem 0;
  align-items: flex-start;
  @media (max-width: 884px) {
    flex-direction: column;
  }
`;

const MainLeft = styled.div`
  flex: 17%;
  margin: 0 1rem 0 0;
  padding: 0 0.5rem 0 0;
  border-right: 0.001rem solid #22202063;
  @media (max-width: 884px) {
    order: 2;
    margin: 0 auto;
  }
`;

const MainRight = styled.div`
  padding: 1rem;
  .cardStyle {
    border-radius: 4px;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-10px);
    }
  }
  @media (max-width: 884px) {
    order: 1;
  }
`;

const GridWrapper = styled(Grid)`
  gap: 2%;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 721px) {
    order: 1;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    order: 1;
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 3rem;
  }
`;

const BestSelling = styled.section`
  max-width: 200px;
  gap: 0.3rem;
  grid-template-columns: 1fr;
  header {
    margin: 1rem 0;
    h2 {
      font-weight: 600;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 4px;
    height: 80px;
  }
`;

const Categories = styled.div`
  h2 {
    margin: 0 0 0.8rem 0;
    font-weight: 600;
  }
  border-bottom: 0.01rem solid #363b3f1f;
`;

const Courses = () => {
  const [_, setCategoryValue] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CourseStyle>
        <ContainerWrapper>
          <h1>All Courses That Are Listed Below Are Free Of Charnge.</h1>
          <h2>Learn What You Need!</h2>
        </ContainerWrapper>
      </CourseStyle>
      <Container>
        <Main>
          <MainLeft>
            <Categories>
              <h2>Categories</h2>
              <FormControl component="fieldset">
                <RadioGroup aria-label="categoty" name="category1">
                  <FormControlLabel
                    color="primary"
                    value="Web Development"
                    control={<Radio />}
                    label="Web Development"
                    onChange={(e) => setCategoryValue(e.target.value)}
                  />
                  <FormControlLabel
                    color="primary"
                    value="Mobile Development"
                    control={<Radio />}
                    label="Mobile Development"
                    onChange={(e) => setCategoryValue(e.target.value)}
                  />
                  <FormControlLabel
                    color="primary"
                    value="Game Development"
                    control={<Radio />}
                    label="Game Development"
                    onChange={(e) => setCategoryValue(e.target.value)}
                  />
                  <FormControlLabel
                    color="primary"
                    value="Data Science"
                    control={<Radio />}
                    label="Data Science"
                    onChange={(e) => setCategoryValue(e.target.value)}
                  />
                </RadioGroup>
              </FormControl>
            </Categories>
            <BestSelling>
              <header>
                <h2>Top Rated</h2>
              </header>
              <Grid span="1fr" space="2%">
                <Card className="flex">
                  <Link to="/course/id">
                    <Img
                      src="https://www.reliablesoft.net/wp-content/uploads/2019/08/online-digital-marketing-course.png"
                      width="70px"
                    />
                  </Link>
                  <p>Lorem ipsum dot.</p>
                </Card>
                <Card className="flex">
                  <Link to="/course/id">
                    <Img
                      src="https://www.reliablesoft.net/wp-content/uploads/2019/08/online-digital-marketing-course.png"
                      width="70px"
                    />
                  </Link>
                  <p>Lorem ipsum dolor .</p>
                </Card>
                <Card className="flex">
                  <Link to="/course/id">
                    <Img
                      src="https://www.reliablesoft.net/wp-content/uploads/2019/08/online-digital-marketing-course.png"
                      width="70px"
                    />
                  </Link>
                  <p>Lorem ipsum dolor .</p>
                </Card>
                <Card className="flex">
                  <Link to="/course/id">
                    <Img
                      src="https://www.reliablesoft.net/wp-content/uploads/2019/08/online-digital-marketing-course.png"
                      width="70px"
                    />
                  </Link>
                  <p>Lorem ipsum dolor .</p>
                </Card>
              </Grid>
            </BestSelling>
          </MainLeft>
          <MainRight>
            <GridWrapper>
              <Card className="cardStyle">
                <Link to="/course/id">
                  <Img
                    src="https://www.reliablesoft.net/wp-content/uploads/2019/08/online-digital-marketing-course.png"
                    width="100px"
                  />
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </Card>
              <Card className="cardStyle">
                <Link to="/course/id">
                  <Img
                    src="https://www.reliablesoft.net/wp-content/uploads/2019/08/online-digital-marketing-course.png"
                    width="100px"
                  />
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </Card>
              <Card className="cardStyle">
                <Link to="/course/id">
                  <Img
                    src="https://www.reliablesoft.net/wp-content/uploads/2019/08/online-digital-marketing-course.png"
                    width="100px"
                  />
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </Card>
              <Card className="cardStyle">
                <Link to="/course/id">
                  <Img
                    src="https://www.reliablesoft.net/wp-content/uploads/2019/08/online-digital-marketing-course.png"
                    width="100px"
                  />
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur .</p>
              </Card>
            </GridWrapper>
          </MainRight>
        </Main>
      </Container>
    </>
  );
};

export default Courses;
