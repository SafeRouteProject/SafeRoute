import React, { Component } from "react";
import "./Social.css";
import { connect } from "react-redux";
import { getCurrentLocation } from "../../ducks/user";

class Social extends Component {
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
    return <div>SOCIAL PAGE</div>;
  }
}
let mapStateToProps = state => {
  return {
    ...state.user
  };
};
export default connect(mapStateToProps, { getCurrentLocation })(Social);
