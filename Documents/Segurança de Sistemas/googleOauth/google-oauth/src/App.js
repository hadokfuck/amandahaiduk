import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
export class App extends Component {

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
    
    
  }
  render() {
    return (
      <div>
        <GoogleLogin
        clientId="230901459538-ig0m9156174k09r5rohj4s6qv6qv5rjd.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        
        />
      </div>
    )
  }
}

export default App
