import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../ducks/user";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import MaskedInput from "react-text-mask";

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      userNameInput: "",
      emailInput: "",
      firstNameInput: "",
      lastNameInput: "",
      phoneNumberInput: "",
      passwordInput: ""
    };
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleInputChanges = this.handleInputChanges.bind(this);
  }
  handleCreateUser() {
    // console.log(userNameInput);
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
    // if (!firstNameInput) {
    //   console.log("null");
    // }
    // if (!lastNameInput) {
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
  handleInputChanges(change, val) {
    // console.log(change);
    // console.log(val);
    // this.setState({ change: val });
  }
  render() {
    return (
      <div>
        <TextField
          onChange={e =>
            this.handleInputChanges("userNameInput", e.target.value)
          }
          label="User Name"
          placeholder="User Name"
        />
        <TextField
          onChange={e => this.handleInputChanges("emailInput", e.target.value)}
          label="Email"
          placeholder="Email"
        />
        <MaskedInput
          //   {...other}
          //   ref={inputRef}
          mask={[
            "(",
            /[1-9]/,
            /\d/,
            /\d/,
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
        <TextField
          onChange={e =>
            this.handleInputChanges("firstNameInput", e.target.value)
          }
          label="First Name"
          placeholder="First Name"
        />
        <TextField
          onChange={e =>
            this.handleInputChanges("lastNameInput", e.target.value)
          }
          label="Last Name"
          placeholder="Last Name"
        />
        <TextField
          onChange={e =>
            this.handleInputChanges("passwordInput", e.target.value)
          }
          label="Password"
          placeholder="Password"
          type="password"
        />

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
