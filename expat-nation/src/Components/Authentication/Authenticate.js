import React, { Component } from 'react';
import AccessInterface from './AccessInterface'
import SignupForm from './SignupForm';


class Authenticate extends Component {
  state = {
    authentication: {
      username: '',
      password: '',
    },
    activeAccess: 'login',
    inputType: {
      signup: ['username', 'password', 'country'],
      login: ['username', 'password'],
    },
    singupType: {
      email: '',
      emailConfirmation: '',
      passwordConfirmation: '',
      birthday: '',
      country: '',
      state: '',
      provience: '',
      city: '',
      maninciple: '',
      zip: '',
      number: '',
      interests: [],
      tags: [],
      userThumbnail: '',
    }
  }

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
      // axios request to check credentials
      // if credientials true
        // update local storage
        // update state to true
        // update state of userdata
        // paganiate data for wall
        // redirect to dashboard
        this.props.updateAccess()
      // if false redirect to login with error
        // 5 attempts before cooldown
        //

    } else {
      // if signup
        // route to /signup form
    }
    
  }

  handleSignup = e => {
    // axios post request
    // check if correct information
      // if correct information database will update with new user
      // send back information of new user
      // update state logged in to true
      // update state of user information
      // route to /dashboard
    // if incorrect tell user and redirect to signup

  }

  render() {
    if(this.props.match.url === '/signup')
      return (
        <SignupForm 
          handleFormInput={this.handleFormInput}
          handleSignup={this.handleSignup}
          authentication={this.state.authentication}
          singupType={this.state.singupType}
          inputType={this.state.inputType.signup}
        />
      )

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

export default Authenticate;