import React from 'react';
import FormInput from './FormInput'

const LoginForm = props => {
  const { username, password, handleFormInput, handleLogin } = props;
  const valueType = [username, password];
  const inputType = ["username", "password"];

  return (
    <div>
      <form onSubmit={ (e) => handleLogin(e)}>

        {inputType.map(element => {
          return <FormInput 
            type={element}
            name={element}
            handleFormInput={handleFormInput}
            value={valueType[element]} 
          />
        })}

        <button type={'submit'}>Log in</button>
      </form>
    </div>
  )
}

export default LoginForm;