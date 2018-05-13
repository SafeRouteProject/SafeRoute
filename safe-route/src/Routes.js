import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import LandingLogin from "./components/LandingLogin/LandingLogin";
import Social from "./components/Social/Social";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={LandingLogin} />
        <Route path="/social" component={Social} />
      </Switch>
    </Router>
  );
};
