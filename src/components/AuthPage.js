import React, { Component } from "react";
import { Auth } from "aws-amplify";
import jwtDecode from 'jwt-decode';
import "./AuthPage.css";

export default class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      tenant: ""
    };
  }

  async componentDidMount() {
    try{
      Auth.currentSession().then( data => {
        var sessionIdInfo = jwtDecode(data.getIdToken().jwtToken);
          // Get the user group       
          let groupObj = sessionIdInfo['cognito:groups'];
          let currentUser = sessionIdInfo['email'];
          //let userObj = sessionIdInfo['cognito:username'];
          let tenantObj = groupObj.find(groupObj => groupObj.length > 0);
          this.setState({ username: currentUser });
          this.setState({ tenant: tenantObj });
      });
      //
    }catch(e) {
      alert(e);
    }
  }

  render() {
    return (
      <div className="AuthPage">
        <div className="landing">
          <h1>Cognito Authentication Demo</h1>
          <p>Hey <b>{ this.state.username }</b>, Consider yourself happy if you could see this
            because you belong to the group of <b>{ this.state.tenant }</b></p>
        </div>
      </div>
    );
  }
}