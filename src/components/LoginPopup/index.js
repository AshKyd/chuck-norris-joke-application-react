import React from "react";
import Button from "../Button";
import Error from "../Error";
import {
  doesntContainIncreasingStraight,
  containsInvalidChars,
  containsUppercaseLetters,
  isInvalidLength,
  doesntContainsTwoOverlappingPairs
} from "./passwordValidationFunctions";
import { loadLocalStorage, saveLocalStorage } from "../../utils/localStorage";
import "./LoginPopup.css";
const LOCALSTORAGE_KEY = "LOGIN";

class LoginPopup extends React.Component {
  state = {
    username: null,
    password: null,
    error: null,
    isLoggedIn: false
  };

  componentDidMount() {
    loadLocalStorage(LOCALSTORAGE_KEY, false, "sessionStorage").then(
      isLoggedIn => this.setState({ isLoggedIn })
    );
  }
  /**
   * Immediately set form field values to the state.
   * This makes it easier to handle the form submit.
   */
  makeField(prop, label, type) {
    const updateProps = e => this.setState({ [prop]: e.target.value });
    return (
      <div className="LoginPopup__form-field">
        <label htmlFor={prop}>{label}</label>
        <input
          id={prop}
          type={type}
          onKeyPress={updateProps}
          onChange={updateProps}
        />
      </div>
    );
  }
  login(e) {
    if (e) e.preventDefault();
    const { username, password } = this.state;
    if (!username)
      return this.setState({ error: "Please enter your username" });

    const error = [
      [
        containsUppercaseLetters,
        "Passwords can only contain lower case alphabetic characters."
      ],
      [
        doesntContainIncreasingStraight,
        "Passwords must include one increasing straight of at least three letters, like abc , cde , fgh and so on."
      ],
      [
        containsInvalidChars,
        "Passwords may not contain the letters i, O, or l."
      ],
      [
        doesntContainsTwoOverlappingPairs,
        "Passwords must contain at least two non-overlapping pairs of letters, like aa, bb, or cc."
      ],
      [isInvalidLength, "Passwords cannot be longer than 32 characters."]
    ].find(([check, errorMessage]) => check(password) && errorMessage);

    if (error) return this.setState({ error });

    this.setState({ isLoggedIn: true });
    saveLocalStorage(LOCALSTORAGE_KEY, true, "sessionStorage");
  }
  render() {
    const { error, isLoggedIn } = this.state;

    // If we are already logged in, don't do anything special
    if (isLoggedIn) return <div />;

    // Otherwise show the popup
    return (
      <div className="LoginPopup">
        <form className="LoginPopup__inner" onSubmit={this.login.bind(this)}>
          <h2>Log in</h2>
          {error && <Error>{error}</Error>}
          {this.makeField("username", "Username", "text")}
          {this.makeField("password", "Password", "password")}
          <Button
            type="submit"
            onClick={this.login.bind(this)}
            style={{ margin: "0 0 0 auto", width: "35%" }}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default LoginPopup;
