import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div classname='profile-container'>
        <div className='profile-banner' />
        <div className='profile-pfp' />
        <section className='profile-user-info-container'>
          <h2 className='profile-username'>Username</h2>
          <h3 className='profile-fullname'>Full Name</h3>
          <h3 className='profile-email'>useremail@email.com</h3>
          <h3 className='profile-phone'>555-555-5555</h3>
        </section>

        <section className='profile-groups-container'>
          <h3 className='profile-groups'>Your Groups</h3>
        </section>
      </div>
    );
  }
}
export default Profile;
