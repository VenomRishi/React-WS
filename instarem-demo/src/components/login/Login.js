import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Link, Paper } from "@material-ui/core";
import "./LoginStyle.scss";
import axios from "axios";
import { BASE_URL, LOGIN_URL } from "../../common/Constants";
import { useHistory } from "react-router-dom";

// let history = useHistory();

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLoginClick = () => {
    axios
      .put(BASE_URL + LOGIN_URL, this.state)
      .then(response => {
        localStorage.setItem("token", response.data);
        useHistory().push("/dashboard");
      })
      .catch(error => {
        console.log(error.response.data.message);
      });
  };

  render() {
    return (
      <div className="container">
        <Paper elevation={3} className="login-paper">
        <div className="header-container">Login</div>
          <div className="input-container">
            <TextField
              className="input"
              required
              variant="outlined"
              label="username"
              size="small"
              type="email"
              name="username"
              onChange={this.handleChange}
            />
            <TextField
              className="input"
              required
              variant="outlined"
              label="password"
              size="small"
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="action-container">
            <Button
              variant="contained"
              color="primary"
              className="login-button"
              onClick={this.handleLoginClick}
            >
              Login
            </Button>
          </div>
          <div className="option-container">
            <Link href="/register" >
              Create account
            </Link>
            <Link href="/forgotpassword" >
              Forgot password
            </Link>
          </div>
        </Paper>
        <div className="login-container">
          
        </div>
      </div>
    );
  }
}

export default Login;
