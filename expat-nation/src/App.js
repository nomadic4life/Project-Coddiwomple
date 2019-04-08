import React, { Component } from 'react';
import LoginForm from './Components/Authentication/LoginForm'

class App extends Component {
  state = {
    authentication: {
      username: '',
      password: '',
    },
    inputType: {
      signup: ['username', 'password', 'country'],
      login: ['username', 'password'],
    }

  }

  handleFormInput = e => {
    console.log(e.target.value)
    this.setState({
      authentication: {
        ...this.state.authentication, 
        [e.target.name]: e.target.value 
      }
    })
  }

  handleLogin = e => {
    e.preventDefault();
    // here check for some authentication if true update state for authorization

    this.setState({
      authentication: {
        username: '', 
        password: '' 
       }
    })
  }

  render() {
    return (
      <div className="App">
        <LoginForm
          handleFormInput={this.handleFormInput}
          handleLogin={this.handleLogin}
          inputType={this.state.inputType.login}
          authentication={this.state.authentication} />
      </div>
    );
  }
}

export default App;
