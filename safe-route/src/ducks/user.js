//initial state
const initialState = {
  userLat: "",
  userLong: "",
  userAddress: ""
};

//action constants
const GET_CURRENT_LOCATION = "GET_CURRENT_LOCATION";

//reducer
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords.latitude, position.coords.longitude);
          return {
            ...state,
            userLat: position.coords.latitude,
            userLong: position.coords.longitude
          };
        },
        error => console.log(error),
        { enableHighAccuracy: false, maximumAge: 300000, timeout: 290000 }
      );
    // return { ...state };
    default:
      return { ...state };
  }
}

//action creators
export function getCurrentLocation() {
  return {
    type: GET_CURRENT_LOCATION,
    payload: null
  };
}
