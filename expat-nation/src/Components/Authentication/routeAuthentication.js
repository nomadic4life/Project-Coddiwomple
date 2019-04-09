import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const routeAuthentication = Authenticate => Dashboard => props => {
  const { isLogged, updateAccess } = props;

  if(!isLogged) {

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