import React from 'react'
import '../styles/Register.css'

const Register = () => {
    return (
        <article className="form-register-main">
            <div className="form-register-form">
                <h2 className="form-register-register">Register</h2>
                <input type="text" className='form-register-name' placeholder='Enter your name' />
                <input type="text" className='form-register-email' placeholder='Enter your email' />
                <input type="text" className='form-register-password' placeholder='Password' />
                <button className="form-register-btn">Register</button>
            </div>
        </article>
    )
}

export default Register