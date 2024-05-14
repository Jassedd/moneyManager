import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

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
      <form onSubmit={handleSubmit} className='login_form'>
        <div className='section_input_login'>
            <input type="text"
                id='username'
                name='Username'
                value={FormData.username}
                onChange={handleInputChange}
                className='username_input_login'
                placeholder='Username'
            />
        </div>
        <div className='section_input_login'>
            <input type="password" name="Contraseña" id="password" placeholder="Password" value={FormData.password} onChange={handleInputChange} className='password_input_login' />
        </div>
        <section className='btns_login_register'>
          <button className='btn_login' type='submit'>
            Iniciar Sesión
          </button>
          <div>
            <Link to="/register">Crear nueva cuenta</Link>
          </div>
        </section>
      </form>
    </>
  )
}

export default Login