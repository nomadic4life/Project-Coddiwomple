import React from 'react';

const FormInput = props => {
  const { type, name, value, handleFormInput } = props;

  return (
    <label>
      {type}
      <input 
        type="text"
        name={name}
        value={value}
        onChange={handleFormInput}
        />
    </label>
  )
}

export default FormInput;