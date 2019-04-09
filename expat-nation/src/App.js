import React, { Component } from 'react';
import Authenticate from './Components/Authentication/Authenticate'
import routeAuthentication from './Components/Authentication/routeAuthentication'
import MainSection from './Components/Dashboard/Dashboard'
import { Route } from 'react-router-dom'
// import { withRouter } from 'react-router';
import Dashboard from './Components/Dashboard/Dashboard';

const Authorization = routeAuthentication(Authenticate)(Dashboard);

class App extends Component {
  state = {
    isLogged: false,
    isLoaded: false,
  }

  componentDidMount() {

    if(localStorage.getItem('user'))
      // maybe can use cache for loading if logged in?
      this.setState({
        isLogged: true,
        isLoaded: true // always set to true
      })

    else
      this.setState({
        isLogged: false,
        isLoaded: true // always set to true
      })
  }

  updateAccess = isLogged => {
    console.log('here', isLogged)
    localStorage.setItem('user', true);
    this.setState(
      {isLogged: true}
    )
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
            isLogged={this.state.isLogged}
            updateAccess={this.updateAccess}
          />} 
      />
    )
  }

}

export default App;
