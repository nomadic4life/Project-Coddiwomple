import React from 'react';
import FormInput from './FormInput'

const AccessInterface = props => {
  const { authentication: {username, password}, activeAccess, inputType, handleFormInput, handleLogin } = props;
  const valueType = [username, password];

  return (
    <form onSubmit={ (e) => handleLogin(e)}>

      {inputType.map( element => {
        return <FormInput key={element}
          label={element}
          name={element}
          handleFormInput={handleFormInput}
          value={valueType[element]} 
        />
      })}

      <button type={'submit'}>{activeAccess}</button>
    </form>
  )
}

export default AccessInterface;