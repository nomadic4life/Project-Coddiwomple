import React, { Component } from 'react';
import { Route } from 'react-router-dom'

const testAuthentication = Validate => Logged => props => {
  const { auth, handleFormInput, handleLogin } = props;
  console.log(props.isLogged)
  if(!props.isLogged)
    // Render Authorization if logged out
    return (
      <Route 
        path='/' 
        render={props => 
          <Validate
            {...props}
          />} 
      />
    )

else
  // Render Dashboard if logged in
  return (
    <Route 
      path='/' 
      render={props => 
        <Logged 
          {...props}
          auth={props.auth}
        />} 
    />
  )
}
  

export default testAuthentication;