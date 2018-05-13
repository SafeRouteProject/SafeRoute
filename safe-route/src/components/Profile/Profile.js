import React, { Component } from "react";
import "./Profile.css";
import { connect } from "react-redux";
import { getCurrentLocation } from "../../ducks/user";

let intervalName;
class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getCurrentLocation();
    intervalName = setInterval(() => this.props.getCurrentLocation(), 5000);
  }
  componentWillMount() {
    clearInterval(intervalName);
  }
  render() {
    // console.log(intervalName);
    return (
      <div className="profile-container">
        <div className="profile-banner" />
        <div className="profile-pfp" />
        <section className="profile-user-info-container">
          <h2 className="profile-username">Username</h2>
          <h3 className="profile-fullname">Full Name</h3>
          <h3 className="profile-email">useremail@email.com</h3>
          <h3 className="profile-phone">555-555-5555</h3>
        </section>

        <section className="profile-groups-container">
          <h3 className="profile-groups-text">Your Groups</h3>
          <img
            src="https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="profile-groups-image image-1"
          />
          <img
            src="https://images.pexels.com/photos/753873/pexels-photo-753873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="profile-groups-image image-2"
          />
          <div className="profile-groups-image image-3">
            <h3>+4</h3>
          </div>
        </section>
      </div>
    );
  }
}
let mapStateToProps = state => {
  return {
    ...state.user
  };
};
export default connect(mapStateToProps, { getCurrentLocation })(Profile);
