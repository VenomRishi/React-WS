import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CustomizedSnackbars from "./components/demo/CustomizedSnackbars";
import Register from "./components/register/Register";
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import SetPassword from "./components/setpassword/SetPassword";
import Verify from "./components/verify/Verify";

export default class extends Component {
  render() {
    return (
      <div>
        <Router>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" >
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/forgotpassword">
              <ForgotPassword />
            </Route>
            <Route path="/setpassword">
              <SetPassword />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/verify">
              <Verify/>
            </Route>
            <Route path="/testsnackbar">
              <CustomizedSnackbars/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
