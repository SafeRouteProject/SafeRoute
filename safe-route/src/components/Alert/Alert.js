import React, { Component } from "react";
import "./alert.css";

import swal from "sweetalert2";
import Button from "material-ui/Button";

class Alert extends Component {
  constructor() {
    super();
    this.state = {
      sweetAlert: false,
      number: 5,
      intervalValue: false,
      interval: 0
    };

    this.toggleSweetAlert = this.toggleSweetAlert.bind(this);
    this.toggleInterval = this.toggleInterval.bind(this);
    this.toggleIntervalValue = this.toggleIntervalValue.bind(this);
  }

  toggleSweetAlert() {
    this.setState({ sweetAlert: !this.state.sweetAlert });
  }

  toggleIntervalValue() {
    this.setState({ intervalValue: !this.state.intervalValue });
  }

  toggleInterval() {
    if (!this.state.intervalValue) {
      this.intervalId = setInterval(() => {
        this.setState({ number: this.state.number - 1 });
      }, 1000);
    } else {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <div>
        <div
          className={this.state.sweetAlert && "alert-darken"}
          onClick={() => {
            this.toggleSweetAlert();
            this.toggleIntervalValue();
            this.toggleInterval();
            this.setState({ number: 5 });
          }}
        />
        <div
          className={this.state.sweetAlert && "sweet-alert"}
          onClick={() => {
            console.log("yes");
          }}
        >
          <div
            className={
              this.state.sweetAlert
                ? "sweet-alert-title"
                : "sweet-alert-title-hide"
            }
          >
            {this.state.number === -1 ? (
              <div className="alert-info">
                <h1>Alert sent!</h1>
                <Button
                  variant="raised"
                  color="primary"
                  size="large"
                  className="close-btn-hidden"
                  disabled
                  onClick={() => {
                    this.toggleSweetAlert();
                    this.setState({ number: 5 });
                    this.toggleIntervalValue();
                  }}
                >
                  Close
                </Button>
              </div>
            ) : this.state.number === -2 ? (
              (this.toggleInterval(),
              (
                <div className="alert-info">
                  <h1>Alert sent!</h1>
                  <Button
                    variant="raised"
                    color="primary"
                    size="medium"
                    className="close-btn"
                    onClick={() => {
                      this.toggleSweetAlert();
                      this.setState({ number: 5 });
                      this.toggleIntervalValue();
                    }}
                  >
                    Close
                  </Button>
                </div>
              ))
            ) : (
              <div className="alert-info">
                <h1>{this.state.number}</h1>
                <Button
                  className="close-btn"
                  onClick={() => {
                    this.toggleSweetAlert();
                    this.toggleIntervalValue();
                    this.toggleInterval();
                    this.setState({ number: 5 });
                  }}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </div>
        <div class="alert-container">
          <div className="background" />
          <Button
            variant="raised"
            color="primary"
            size="large"
            className="alert-btn"
            onClick={() => {
              this.toggleSweetAlert();
              this.toggleIntervalValue();
              this.toggleInterval();
            }}
          >
            <h1 className="alert-text">Alert</h1>
          </Button>
        </div>
      </div>
    );
  }
}

export default Alert;
