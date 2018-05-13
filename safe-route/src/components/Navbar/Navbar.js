import React, { Component } from "react";
import "./navbar.css";

import { Link, Route } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-profile-icon">
          <i class="fas fa-exclamation-circle" />
        </div>
        <div className="navbar-profile-icon">
          <i class="fas fa-users" />
        </div>
        <div className="navbar-profile-icon">
          <i class="far fa-user-circle" />
        </div>
        {/* <Link to='/' className="navbar-profile-icon">
          <i class="fas fa-exclamation-circle" />
        </Link>
        <Link to='/' className="navbar-profile-icon">
          <i class="fas fa-users" />
        </Link>
        <Link to='/profile' className="navbar-profile-icon">
          <i class="far fa-user-circle" />
        </Link> */}
      </div>
    );
  }
}

export default Navbar;
