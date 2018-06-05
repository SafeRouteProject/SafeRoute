import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import getMuiTheme from "material-ui/styles/getMuiTheme";
// import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import Profile from "./components/Profile/Profile";
import LandingLogin from "./components/LandingLogin/LandingLogin";
import Home from "./components/Home/Home";
import routes from "./Routes";
import Navbar from "./components/Navbar/Navbar";
import joe from "./joe.png";

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          {routes}
          <Navbar />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
