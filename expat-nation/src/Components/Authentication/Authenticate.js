import React, { Component } from 'react';
import AccessInterface from './AccessInterface'
import { Route } from 'react-router-dom'
import SignupForm from './SignupForm';


class App extends Component {
  state = {
    authentication: {
      username: '',
      password: '',
    },
    activeAccess: 'login',
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

  updateAcessType = () => {

    let accessType;

    if(this.state.activeAccess === 'login')
      accessType = 'signup';
    else
      accessType = 'login';

    this.setState({
      activeAccess: accessType
    })
  }

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

    // set auth object
    const authentication = {
      username: this.state.username,
      password: this.state.password,
      activeAccess: this.state.activeAccess
    }

    // reset form state, is trash state
    this.setState({
      authentication: {
        username: '', 
        password: '',
        activeAccess: 'login',
       }
    })

    // condition for login or signup
    if(authentication.activeAccess === 'login') {
      this.props.updateAccess()
      // update login state to true
      // route to /dashboard

      // check server for credentials
      // if false allow for 5 reattempts
      // if true 
      // update local storage
      // update state in app or redux
      // updaate render
      // update route
    } else {
      // update some signup
      // route to /signup form
    }
    
  }

  render() {
    if(this.props.match.url === '/signup')
      return <SignupForm />
    return (
      <AccessInterface
        handleFormInput={this.handleFormInput}
        handleLogin={this.handleLogin}
        authentication={this.state.authentication}
        inputType={this.state.inputType.login}
        activeAccess={this.state.activeAccess}
      />
    )
  }

}

export default App;