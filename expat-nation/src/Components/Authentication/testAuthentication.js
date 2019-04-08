import React, { Component } from 'react';

const testAuthentication = Validate => Logged => props => {
  if(!props.logged) return <Validate {...props} auth={props.auth}/>
  return <Logged {...props} auth={props.auth}/>
}
  

export default testAuthentication;