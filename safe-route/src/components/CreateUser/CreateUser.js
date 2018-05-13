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
      textmask: "(555)    -    ",
      passwordInput: "",
      showPassword: false
    };
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }
  handleCreateUser() {
    let {
      userNameInput,
      emailInput,
      firstNameInput,
      lastNameInput,
      phoneNumberInput,
      passwordInput
    } = this.state;
    // if (userNameInput.length < 8) {
    //   console.log(userNameInput);
    //   console.log("eoe");
    // }
    // if (!emailInput) {
    //   console.log("null");
    // }
    // if (!firstNameInput) { 150
    //   console.log("null");
    // }
    // if (!lastNameInput) {150
    //   console.log("null");
    // }
    // if (!phoneNumberInput) {
    //   console.log("null");
    // }
    // if (!passwordInput) {
    //   console.log("null");
    // }
    // this.props.createUser(
    //   userNameInput,
    //   emailInput,
    //   firstNameInput,
    //   lastNameInput,
    //   phoneNumberInput,
    //   passwordInput
    // );
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
        <TextField
          onChange={this.handleChange("userNameInput")}
          label="User Name"
          placeholder="User Name"
        />
        <TextField
          onChange={this.handleChange("emailInput")}
          label="Email"
          placeholder="Email"
        />
        <FormControl>
          <InputLabel>Phone Number</InputLabel>
          <Input
            value={this.state.textmask}
            onChange={this.handleChange("textmask")}
            inputComponent={TextMaskCustom}
          />
        </FormControl>
        <TextField
          onChange={this.handleChange("firstNameInput")}
          label="First Name"
          placeholder="First Name"
        />
        <TextField
          onChange={this.handleChange("lastNameInput")}
          label="Last Name"
          placeholder="Last Name"
        />
        {/* <TextField
          onChange={this.handleChange("passwordInput")}
          label="Password"
          placeholder="Password"
          type="password"
        /> */}
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input
            type={this.state.showPassword ? "text" : "password"}
            value={this.state.passwordInput}
            onChange={this.handleChange("passwordInput")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={this.toggleShowPassword}>
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        {/* <Button variant="raised" size="medium">
          Login Now
        </Button>
        <Button
          variant="raised"
          size="medium"
          onClick={() => this.handleCreateUser()}
        >
          Sign Up
        </Button> */}
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
