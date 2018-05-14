import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../ducks/user";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import MaskedInput from "react-text-mask";

import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
// import { Visibility, VisibilityOff } from "@material-ui/icons";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { IconButton } from "material-ui";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userNameRegex = new RegExp("^[a-z0-9_-]{3,15}$");

const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        "(",
        /[1-9]/,
        /[1-9]/,
        /[1-9]/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      userNameInput: "",
      emailInput: "",
      firstNameInput: "",
      lastNameInput: "",
      textmask: "(555)    -    ",
      passwordInput: "",
      showPassword: false,
      emailError: false,
      userNameKeyDownCount: 0,
      passwordError: false,
      userNameError: null,
      firstNameError: null,
      lastNameError: null,
      numberError: false
    };
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }
  handleCreateUser() {
    const number =
      this.state.textmask.slice(1, 4) +
      this.state.textmask.slice(6, 9) +
      this.state.textmask.slice(10);

    if (this.state.userNameInput.match(userNameRegex) === null) {
      this.setState({ userNameError: true });
    } else {
      this.setState({ userNameError: false });
    }

    if (number.length < 10 || number.match(/^[0-9]*$/) === null) {
      this.setState({ numberError: true });
    } else {
      this.setState({ numberError: false });
    }

    if (
      !this.state.emailInput ||
      this.state.emailInput.match(emailRegex) === null
    ) {
      this.setState({ emailError: true });
    } else {
      this.setState({ emailError: false });
    }
    if (this.state.firstNameInput.match(/^[a-zA-Z]+$/) === null) {
      this.setState({ firstNameError: true });
    } else {
      this.setState({ firstNameError: false });
    }
    if (this.state.lastNameInput.match(/^[a-zA-Z]+$/) === null) {
      this.setState({ lastNameError: true });
    } else {
      this.setState({ lastNameError: false });
    }

    if (this.state.passwordInput.match(passwordRegex) === null) {
      console.log(this.state.passwordInput.match(passwordRegex));
      this.setState({ passwordError: true, passwordInput: "" });
    } else {
      this.setState({ passwordError: false, passwordInput: "" });
    }
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  toggleShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {/* ------------------------username under 18 characters long--------------------- */}
        <TextField
          onKeyDown={event => {
            if (this.state.userNameKeyDownCount !== 0 && event.which == 8) {
              return this.setState({
                userNameKeyDownCount: this.state.userNameKeyDownCount - 1
              });
            }
            this.setState({
              userNameKeyDownCount: this.state.userNameKeyDownCount + 1
            });
          }}
          onChange={this.handleChange("userNameInput")}
          label="User Name"
          placeholder="User Name"
          error={
            !this.state.userNameError
              ? false
              : this.state.userNameError
                ? true
                : this.state.userNameKeyDownCount > 3 &&
                  this.state.userNameInput.match(userNameRegex) === null
                  ? true
                  : !this.state.userNameInput &&
                    this.state.userNameKeyDownCount < 3
                    ? false
                    : false
          }
        />
        {/* ------------------------email must contact a "." and "@"--------------------- */}

        <TextField
          onChange={this.handleChange("emailInput")}
          label="Email"
          placeholder="Email"
          error={this.state.emailError}
        />
        {/* ------------------------Phone Number is only numbers--------------------- */}

        <FormControl>
          <InputLabel>Phone Number</InputLabel>
          <Input
            value={this.state.textmask}
            onChange={this.handleChange("textmask")}
            inputComponent={TextMaskCustom}
            error={this.state.numberError}
          />
        </FormControl>
        {/* ------------------------First name must only contain letters--------------------- */}

        <TextField
          onChange={this.handleChange("firstNameInput")}
          label="First Name"
          placeholder="First Name"
          error={
            this.state.firstNameError
              ? true
              : !this.state.firstNameInput
                ? false
                : this.state.firstNameInput.match(/^[a-zA-Z]+$/) === null
                  ? true
                  : false
          }
        />
        {/* ------------------------Last name must only contain letters--------------------- */}

        <TextField
          onChange={this.handleChange("lastNameInput")}
          label="Last Name"
          placeholder="Last Name"
          error={
            this.state.lastNameError
              ? true
              : !this.state.lastNameInput
                ? false
                : this.state.lastNameInput.match(/^[a-zA-Z]+$/) === null
                  ? true
                  : false
          }
        />
        {/*-----------------------password must have a lowercase, uppercase, special character, a number, and 8 letters long --------------------------*/}
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input
            type={this.state.showPassword ? "text" : "password"}
            value={this.state.passwordInput}
            onChange={this.handleChange("passwordInput")}
            error={this.state.passwordError}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={this.toggleShowPassword}>
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button variant="raised" size="medium">
          Login Now
        </Button>
        <Button
          variant="raised"
          size="medium"
          onClick={() => this.handleCreateUser()}
        >
          Sign Up
        </Button>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    ...state.user
  };
};

export default connect(mapStateToProps, { createUser })(CreateUser);
