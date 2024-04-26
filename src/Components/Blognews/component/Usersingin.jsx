import React, { useState } from 'react'
import '../styles/Register.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseconfig'
import { toast } from 'react-toastify'

const Usersingin = ({ createOrSignIn, enterToFormPost }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            enterToFormPost()
        } catch (error) {
            toast(error.code, { type: "error" })
        }
    }

    const showPassword = () => setShow(!show)

    return (
        <article className="form-register-main">
            <div className="form-register-form">
                <h2 className="form-register-register">Login</h2>
                <input
                    type="text"
                    className='form-register-email'
                    placeholder='Enter your email'
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <input
                    type={show ? "text" : "password"}
                    className='form-register-password'
                    placeholder='Password'
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <div onClick={showPassword} className="login-hiden-blog">
                    {show ? <i className='bx bx-hide'></i> : <i className='bx bx-show'></i>}
                </div>
                <button onClick={handleLogin} className="form-register-btn">Login</button>
            </div>
            <h3>Si no tienes una cuenta creala</h3>
            <h3>Create an account</h3>
            <button onClick={createOrSignIn} className="form-register-btn">Create</button>
        </article>
    )
}

export default Usersingin