import React from 'react'
import { Link } from 'react-router-dom'
import "./LoginBtn.css"

function LoginBtn() {
  return (
    <Link to="/login">
        <button className='login_btn'>
            Iniciar Sesión
        </button>
    </Link>
  )
}

export default LoginBtn