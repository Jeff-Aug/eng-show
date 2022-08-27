import React, { useState } from 'react';
import './form.css'

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmationPassword: '',
}

export const About = () => {

  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  
  return (
    <div className='container'>
      <form >
        <label  htmlFor="name">Nome:</label>
        <input type="text" name="name" onChange={handleChange} required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" onChange={handleChange} required/>

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={handleChange} required />

        <label htmlFor="confirmationPassword">Telefone:</label>
        <input  placeholder='(XX) XXXX-XXXX' type="confirmationPassword" name="confirmationPassword"onChange={handleChange} />

        <button type="submit">
          Cadastrar
        </button>
      </form>
      
    </div>
  )
}
