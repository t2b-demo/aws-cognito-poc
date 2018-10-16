import React, { Component } from "react";
import "./AuthPage.css";

export default class AuthPage extends Component {
  render() {
    return (
      <div className="AuthPage">
        <div className="landing">
          <h1>Cognito Authentication Demo</h1>
          <p>Consider yourself happy if you could see this...</p>
        </div>
      </div>
    );
  }
}