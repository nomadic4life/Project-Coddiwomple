import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { checkIsLoggedIn } from './actions';

import routeAuthentication from './Components/Authentication/routeAuthentication'
import Authenticate from './Components/Authentication/Authenticate'
import Dashboard from './Components/Dashboard/Dashboard';
import Loading from './Components/Dashboard/Loading'

const Authorization = withRouter(routeAuthentication(Authenticate)(Dashboard));

class App extends Component {

  componentDidMount() {

    if(localStorage.getItem('user'))

      this.props.checkIsLoggedIn({
        isLogged: true,
      })
      // maybe can use cache for loading if logged in?
        // if data in cache load from cache
        // update only nessarry data
      // if no cache
        // axios call
        // update data
        // update state

    else
      this.props.checkIsLoggedIn({
        isLogged: false,
      })
  }

  updateAccess = isLogged => {
    localStorage.setItem('user', true);
    this.props.checkIsLoggedIn(
      {isLogged: true}
    )
  } 


  render() {
    if(!this.props.isLoaded) 
      return <Loading />
      
    return (
      <Authorization 
        isLogged={this.props.isLogged}
        updateAccess={this.updateAccess}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.isLogged,
    isLoaded: state.isLoaded
  }
}
export default connect(
  mapStateToProps,
  { checkIsLoggedIn })(App);
