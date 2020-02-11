import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import "./LoginStyle.scss";
import Axios from "axios";

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
      Axios.put()
  }

  render() {
    return (
      <div className="container">
        <div className="login-container">
          <div className="header-container">Login</div>
          <div className="input-container">
            <TextField
            className="input"
              required
              variant="outlined"
              size="small"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
            />
            <TextField
            className="input"
              required
              variant="outlined"
              size="small"
              type="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="action-container">
            <Button variant="outlined" color="primary" className='login-button' onClick={this.handleLoginClick}>
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
