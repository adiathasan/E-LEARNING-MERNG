import React from "react";
import { Grid } from "../utils/style";
import styled from "styled-components";
import GroupIcon from "@material-ui/icons/Group";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

const StatSection = styled.section`
  color: #333;
  margin-top: 100px;
  h2 {
    text-align: center;
    font-weight: 600;
    font-size: 1.35rem;
    color: #001838;
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 2.6rem;
  }
  .MuiSvgIcon-root {
    color: #024daf;
    transform: scale(1.4);
  }
  p {
    margin: 0.3rem 0;
    font-size: medium;
    font-weight: 600;
  }
`;

const IndividualStat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: scale(1.2);
  @media (max-width: 500px) {
    margin: 0.7rem 0;
  }
`;

const GridWrapper = styled(Grid)`
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Stats = () => {
  return (
    <StatSection>
      <h2>
        Welcome To ProLearner, Largest Online Learnig Platform For Programmers!
      </h2>
      <GridWrapper span={3}>
        <IndividualStat>
          <GroupIcon />
          <p>10,323</p>
          <p>Learner</p>
        </IndividualStat>
        <IndividualStat>
          <LaptopChromebookIcon />
          <p>233</p>
          <p>Courses</p>
        </IndividualStat>
        <IndividualStat>
          <ContactSupportIcon />
          <p>24 H</p>
          <p>Mentor Support</p>
        </IndividualStat>
      </GridWrapper>
    </StatSection>
  );
};

export default Stats;
