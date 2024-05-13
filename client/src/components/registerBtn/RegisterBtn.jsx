import React from 'react'
import "./RegisterBtn.css"
import { Link } from 'react-router-dom'

function RegisterBtn() {
  return (
    <Link to="/register">
        <button className='register_btn'>
            Regístrate
        </button>
    </Link>
  )
}

export default RegisterBtn