import React, { Component } from "react";
import "./LandingLogin.css";

class LandingLogin extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude, position.coords.longitude);
      },
      error => console.log(error),
      { enableHighAccuracy: false, maximumAge: 300000, timeout: 290000 }
    );
    return <div />;
  }
}
export default LandingLogin;
