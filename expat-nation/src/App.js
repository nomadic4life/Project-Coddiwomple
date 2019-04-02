import React, { Component } from 'react';
import LoginForm from './Components/Authentication/LoginForm'

class App extends Component {
  state = {
    Authentication: {
      username: '',
      password: '',
    },

  }

  handleFormInput = e => {
    this.setState({
      Authentication: {
        ...this.state.Authentication, 
        [e.target.name]: e.target.value 
      }
    })
  }

  handleLogin = e => {
    e.preventDefault();
    // here check for some authentication if true update state for authorization

    this.setState({
      Authentication: {
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
          handleLogin={this.handleLogin} />
      </div>
    );
  }
}

export default App;
