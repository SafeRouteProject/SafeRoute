import React, { Component } from "react";
import "./alert.css";

class Alert extends Component {
  render() {
    return (
      <div class="alert-container">
        <div className="alert-bg" />
        <div className="alert-btn">
          <h1 className="alert-text">Alert</h1>
        </div>
      </div>
    );
  }
}

export default Alert;
