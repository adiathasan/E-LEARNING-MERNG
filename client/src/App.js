import React from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import Courses from "./screens/Courses.jsx";
import Sandbox from "./screens/Sandbox.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/courses" component={Courses} />
        <Route path="/sandbox" component={Sandbox} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
