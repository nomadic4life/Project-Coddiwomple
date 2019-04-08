import React, { Component } from 'react';
import Authenticate from './Components/Authentication/LoginForm'
import testAuthentication from './Components/Authentication/testAuthentication'
import MainSection from './Components/Dashboard/Dashboard'
import { Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard';

const Authorization = testAuthentication(Authenticate)(MainSection);

class App extends Component {
  state = {
    logged: false,
    authentication: {
      username: '',
      password: '',
    },
    inputType: {
      signup: ['username', 'password', 'country'],
      login: ['username', 'password'],
    }

  }

  componentDidMount() {
    this.setState({
      logged: true
    })
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
    // considering changing loggedIn to validated or some other verb state
    if(!this.state.logged) {
      return (
        <Route 
          path='/' 
          render={props => 
            <Authorization 
              {...props}
              logged={this.state.logged}

              auth={this.state}
              handleFormInput={this.handleFormInput}
              handleLogin={this.handleLogin} 
              inputType={this.state.inputType.login}
              authentication={this.state.authentication}
            />} 
        />
      )
    } 
    return (
      <Route 
        path='/' 
        render={props => 
          <Dashboard 
            {...props}
            logged={this.state.logged}
          />} 
        />
    )

    return (
      <div className="App">
        <h1>hi</h1>
        <Authorization
          logged={this.state.loggedIn} 
          auth={this.state}
          handleFormInput={this.handleFormInput}
          handleLogin={this.handleLogin} 
          inputType={this.state.inputType.login}
          authentication={this.state.authentication}
        />
        {/* <LoginForm
          handleFormInput={this.handleFormInput}
          handleLogin={this.handleLogin}
          inputType={this.state.inputType.login}
          authentication={this.state.authentication} /> */}
      </div>
    );
  }
}

export default App;
