import React, { Component } from "react";
import "./alert.css";

import swal from 'sweetalert2';
// import Button from '@material-ui/core/Button';

class Alert extends Component {
  render() {
    return (
      <div class="alert-container">
        <div className="background" />
        {/* <Button /> */}
        <div className="alert-btn" onClick={() => swal('Alert Sent!', 'An alert was sent to your dependencies.')}>
          <h1 className="alert-text">Alert</h1>
        </div>
      </div>
    );
  }
}

export default Alert;
