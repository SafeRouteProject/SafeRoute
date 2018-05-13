import axios from "axios";
import NodeGeocoder from "node-geocoder";
const geocoder = NodeGeocoder({
  provider: "google",
  httpAdapter: "https",
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  formatter: null
});

//initial state
const initialState = {
  userLat: "",
  userLong: "",
  userAddress: "",
  loading: false
};

//action constants
const GET_CURRENT_LOCATION = "GET_CURRENT_LOCATION";
const CREATE_USER = "CREATE_USER";

//reducer
let long;
let lat;
let address;
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords.latitude, position.coords.longitude);
          geocoder.reverse(
            { lat: position.coords.latitude, lon: position.coords.longitude },
            (err, res) => {
              console.log(res[0].formattedAddress);
              console.log(position.coords.latitude);
              console.log(position.coords.longitude);
              address = res[0].formattedAddress;
              lat = position.coords.latitude;
              long = position.coords.longitude;
            }
          );
        },
        error => console.log(error),
        { enableHighAccuracy: false, maximumAge: 300000, timeout: 290000 }
      );
      return { ...state, userAddress: address, userLat: lat, userLong: long };

    case `${CREATE_USER}_PENDING`:
      return { ...state, loading: true };

    case `${CREATE_USER}_FULFILLED`:
      console.log(action.payload.data);

    // return { ...state };
    default:
      return { ...state };
  }
}

//action creators

//get users location interval
export function getCurrentLocation() {
  return {
    type: GET_CURRENT_LOCATION,
    payload: null
  };
}

//create user
export function createUser(
  userName,
  email,
  firstName,
  lastName,
  phoneNumber,
  password
) {
  return {
    type: CREATE_USER,
    payload: axios.post("/api/createnewuser", {
      userName,
      email,
      firstName,
      lastName,
      phoneNumber,
      password
    })
  };
}
