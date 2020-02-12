import React, { Component } from "react";
import { Paper, TextField, Button, Link } from "@material-ui/core";
import "./RegisterStyle.scss";
import axios from "axios";
import { BASE_URL, REGISTER_URL } from "../../common/Constants";
import { useHistory } from "react-router-dom";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = () => {
    axios
      .post(BASE_URL + REGISTER_URL, this.state)
      .then(response => {
        useHistory().push("/login");
        console.log(response.data.message);
      })
      .catch(error => {
        console.log(error.response.data.message);
      });
  };

  render() {
    return (
      <div className="container">
        <Paper className="register-paper" elevation={3}>
          <div className="header-container">Register</div>
          <div className="input-container">
            <TextField
              className="input"
              variant="outlined"
              label="First name"
              size="small"
              type="text"
              name="firstName"
              onChange={this.handleChange}
            />
            <TextField
              className="input"
              variant="outlined"
              label="Last name"
              size="small"
              type="text"
              name="lastName"
              onChange={this.handleChange}
            />
            <TextField
              className="input"
              variant="outlined"
              label="Username"
              size="small"
              type="text"
              name="username"
              onChange={this.handleChange}
            />
            <TextField
              className="input"
              variant="outlined"
              label="Password"
              size="small"
              type="password"
              name="password"
              onChange={this.handleChange}
            />
            <TextField
              className="input"
              variant="outlined"
              label="Confirm Password"
              size="small"
              type="password"
              name="confirmPassword"
              onChange={this.handleChange}
            />
          </div>
          <div className="action-container">
            <div>
              <Link href="/">Sign in instead</Link>
            </div>
            <div>
              <Button
                className="register-button"
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
                Register
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Register;
