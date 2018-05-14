/* eslint-disable no-undef */
import React, { Component } from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

const GoogleMapDirections = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    }`,
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "400px", width: "400px" }} />,
    mapElement: <div style={{ height: "100%", width: "100%" }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: new google.maps.LatLng(41.85073, -87.65126),
          destination: new google.maps.LatLng(41.85258, -87.65141),
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  })
)(props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={new google.maps.LatLng(41.85073, -87.65126)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));
<GoogleMapDirections />;

class Directions extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <GoogleMapDirections />;
  }
}
export default Directions;
