import React, { Component } from "react";
import axios from "axios";

class Distances extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    //mode => includes walking, bicycling, driving
    //origin => starting point
    //destination => ending location
    //^^ if lat and long are unavailable then use "|" to seperate the names of the citys;  example => San+Francisco|Victoria
    // units => either imperial(miles/feet) or metric(kilometer/meters)
    //either departure time is specefied or arrival, they cant both be present
    //trafficModel can be either be bestguess, pessimistic, optimistic
    axios
      .get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=32.776664,-96.796988&destinations=35.925064,-86.868890&mode=driving&trafficModel=bestguess&departure_time=now&key=${
          process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        }`
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    return <div>DISTANCE API</div>;
  }
}
export default Distances;
