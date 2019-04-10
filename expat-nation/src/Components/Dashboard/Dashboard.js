import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home'

const Dashboard = props => {
  console.log(props)

  // these route are place holders they have no purpose yet.
  return (
    <>
       <Route
        exact 
        path='/'
        render={props => 
          <Home {...props}/>}
      />
{/* 
      <Route 
        path='/user-profile' // will change this to be more dynamic
        render={props => 
          <Component {...props}/>}
      />

      <Route 
        path='/'
        render={props => 
          <Component {...props}/>}
      />

      <Route 
        path='/'
        render={props => 
          <Component {...props}/>}
      />

      <Route 
        path='/'
        render={props => 
          <Component {...props}/>}
      /> */}
    </>
  )
}

  

export default Dashboard;