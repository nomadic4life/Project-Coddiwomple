import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

const routeAuthentication = Authenticate => Dashboard => props => {
  const { isLogged, updateAccess } = props;

  if(!isLogged) {
    console.log(isLogged)
    // Render Authorization if logged out
    return (
      <Switch>
        <Route 
          exact
          path='/' 
          render={props => 
            <Authenticate
              {...props}
              updateAccess={updateAccess}
            />} 
        />
        <Route 
          path='/signup' 
          render={props => 
            <Authenticate
              {...props}
              updateAccess={updateAccess}
            />} 
        />
      </Switch>
    )
  }

else
  // Render Dashboard if logged in
  return (
    <Switch>
      <Route 
        exact
        path='/' 
        render={props => 
          <Dashboard 
            {...props}
            auth={props.auth}
          />} 
      />
      <Redirect to="/" />
    </Switch>

  )
}
  

export default routeAuthentication;