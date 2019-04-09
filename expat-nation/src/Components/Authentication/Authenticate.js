import React, { Component } from 'react';
import AccessInterface from './AcessInterface'
import { Route } from 'react-router-dom'

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

  // componentDidMount() {
  //   this.setState({
  //     logged: false,
  //     // maybe can use cache for loading?
  //     loaded: true // always set to true
  //   })
  // }

  handleFormInput = e => {
    this.setState({
      authentication: {
        ...this.state.authentication, 
        [e.target.name]: e.target.value 
      }
    })
  }

  handleLogin = e => {
    e.preventDefault();
    this.setState({
      authentication: {
        username: '', 
        password: '' 
       }
    })
  }

  render() {
    return (
      <AccessInterface
        handleFormInput={this.handleFormInput}
        handleLogin={this.handleLogin}
        authentication={this.state.authentication}
        inputType={this.state.inputType.login}
      />
    )
  }

}

export default App;