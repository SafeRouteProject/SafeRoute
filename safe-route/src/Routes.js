import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Alert from "./components/Alert/Alert";
import Profile from "./components/Profile/Profile";
import LandingLogin from "./components/LandingLogin/LandingLogin";
import Social from "./components/Social/Social";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/alert" component={Alert} />
    <Route path="/profile" component={Profile} />
    <Route path="/login" component={LandingLogin} />
    <Route path="/social" component={Social} />
  </Switch>
);
