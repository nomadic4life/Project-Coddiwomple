import React, { Component } from 'react';
import Authenticate from './Components/Authentication/Authenticate'
import testAuthentication from './Components/Authentication/testAuthentication'
import MainSection from './Components/Dashboard/Dashboard'
import { Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard';

const Authorization = testAuthentication(Authenticate)(Dashboard);

class App extends Component {
  state = {
    isLogged: false,
    isLoaded: false,
  }

  componentDidMount() {
    // here check for some authentication if true update state for authorization
    this.setState({
      isLogged: false,
      // maybe can use cache for loading?
      isLoaded: true // always set to true
    })
  }


  render() {
    if(!this.state.isLoaded) 
      return <h1>our temporary loading Component</h1>
      
    return (
      <Route 
        path='/' 
        render={props => 
          <Authorization 
            {...props}
            auth={this.state}
            isLogged={this.state.isLogged}
            handleFormInput={this.handleFormInput}
            handleLogin={this.handleLogin} 
          />} 
      />
    )
  }

}

export default App;
