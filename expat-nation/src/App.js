import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import routeAuthentication from './Components/Authentication/routeAuthentication'
import Authenticate from './Components/Authentication/Authenticate'
import Dashboard from './Components/Dashboard/Dashboard';
import Loading from './Components/Dashboard/Loading'

const Authorization = withRouter(routeAuthentication(Authenticate)(Dashboard));

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
    localStorage.setItem('user', true);
    this.setState(
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

// export default App;

const mapStateToProps = state => {
  return {
    isLogged: state.isLogged,
    isLoaded: state.isLoaded
  }
}
export default connect(
  mapStateToProps,
  { })(App);
