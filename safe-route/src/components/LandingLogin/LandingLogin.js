import React, { Component } from "react";
import "./LandingLogin.css";
import { connect } from "react-redux";
import { getCurrentLocation } from "../../ducks/user";

class LandingLogin extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getCurrentLocation();
    setInterval(() => this.props.getCurrentLocation(), 5000);
  }
  componentWillMount() {
    clearInterval();
  }
  render() {
    return <div />;
  }
}
let mapStateToProps = state => {
  return {
    ...state.user
  };
};
export default connect(mapStateToProps, { getCurrentLocation })(LandingLogin);
