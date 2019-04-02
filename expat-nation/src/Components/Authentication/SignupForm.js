import React from 'react';
import FormInput from './FormInput'

const SignupForm= props => {
  const { username, password, handleFormInput, handleLogin } = props;
  const valueType = [username, password];
  const inputType = ["username", "password", "age", "location", "gender", "styleType"];

  return (
    <div>
      <form onSubmit={ (e) => handleSignup(e)}>

        {inputType.map(element => {
          return <FormInput 
            type={element}
            name={element}
            handleFormInput={handleFormInput}
            value={valueType[element]} />
        })}

        <button type={'submit'}>Signup</button>
      </form>
    </div>
  )
}

export default SignupForm;