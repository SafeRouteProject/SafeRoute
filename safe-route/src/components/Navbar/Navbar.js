import React, { Component } from "react";
import "./navbar.css";

import { BrowserRouter as Router, Link, Switch } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Link to="/" class="link">
          <i class="fas fa-exclamation-circle navbar-profile-icon" />
        </Link>
        <Link to="/social" class="link">
          <i class="fas fa-users navbar-profile-icon" />
        </Link>
        <Link to="/profile" class="link">
          <i class="far fa-user-circle navbar-profile-icon" />
        </Link>
      </div>
    );
  }
}

export default Navbar;
