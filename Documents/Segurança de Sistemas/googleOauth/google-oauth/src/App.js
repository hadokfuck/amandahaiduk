import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  render() {
    return (
      <div align="center">
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SEGURANÇA DE SISTEMAS - OAUTH</h1>
        </header>

        {!this.state.isLoggedIn ? (
          <GoogleLogin
            className="GoogButton"
            clientId="230901459538-ig0m9156174k09r5rohj4s6qv6qv5rjd.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={response => {
              console.log(response)
              this.setState(() => {
                return { isLoggedIn: true };
              });
            }}
            onFailure={response => {
              this.setState(() => {
                return { isLoggedIn: false };
              });
            }}
          />
        ) : (
          <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={response => {
              this.setState(() => {
                return { isLoggedIn: false };
              });
            }}
          />
        )}
      </div>
      </div>
    );
  }
}
export default App;
