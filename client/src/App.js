import React from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import Courses from "./screens/Courses.jsx";
import Sandbox from "./screens/Sandbox.jsx";
import Footer from "./components/Footer.jsx";
import styled from "styled-components";
import Login from "./screens/Login.jsx";

const Consistent = styled.main`
  min-height: 80vh;
  position: relative;
`;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Consistent>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/courses" component={Courses} />
          <Route path="/sandbox" component={Sandbox} />
          <Route path="/" component={HomeScreen} exact />
        </Switch>
      </Consistent>
      <Footer />
    </Router>
  );
};

export default App;
