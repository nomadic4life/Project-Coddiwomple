import React from 'react';
import FormInput from './FormInput'

const LoginForm = props => {
  const { authentication: {username, password}, inputType, handleFormInput, handleLogin } = props;
  const valueType = [username, password];

  return (
    <>
      <form onSubmit={ (e) => handleLogin(e)}>

        {inputType.map((element, index) => {
          console.log({[element]: valueType[index]})
          return <FormInput key={element}
            label={element}
            name={element}
            handleFormInput={handleFormInput}
            value={valueType[element]} 
          />
        })}

        <button type={'submit'}>Log in</button>
      </form>
    </>
  )
}

export default LoginForm;