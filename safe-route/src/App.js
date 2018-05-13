import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import Profile from "./components/Profile/Profile";
import LandingLogin from "./components/LandingLogin/LandingLogin";
import Home from "./components/Home/Home";
import Routes from "./Routes";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <Home />
        <Navbar />
      </div>
    )
=======
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Routes />
        </MuiThemeProvider>
      </Provider>
    );
>>>>>>> master
  }
}

export default App;
