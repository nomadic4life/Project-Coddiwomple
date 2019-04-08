import React from 'react';

const FormInput = props => {
  const { label, name, value, handleFormInput } = props;
  return (
    <label>
      <span>{label}: </span>
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