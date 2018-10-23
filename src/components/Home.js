import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }
  
    try {
      this.setState({ isLoading: true });
    } catch (e) {
      alert(e);
    }
  
    this.setState({ isLoading: false });
  }

  renderLanding() {
    return (
      <div className="Home">
        <div className="landing">
          <h1>DB POC</h1>
          <p>A simple turtle DB POC</p>
        </div>
      </div>
    );
  }

  renderAuthPage() {
    return (
      <div className="AuthPage">
      <div className="landing">
        <h1>Cognito Authentication Demo</h1>
        <p>Consider yourself happy if you could see this...</p>
      </div>
    </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderAuthPage() : this.renderLanding()}
      </div>
    );
  }
}