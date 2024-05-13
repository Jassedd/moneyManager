import React, { useState } from 'react'
import "./Login.css"

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) =>{
        const{username, value} = event.target;
        setFormData({
            ...formData,
            [username]: value
        })
    }

    const handleSubmit = (event) =>{
        console.log(formData)
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='username_input'>
            <label htmlFor="username">Username:</label>
            <input type="text"
                id='username'
                name='Username'
                value={FormData.username}
                onChange={handleInputChange}
            />
        </div>
        <div className='password_input'>
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="Contraseña" id="password" value={FormData.password} onChange={handleInputChange} />
        </div>
      </form>
    </>
  )
}

export default Login