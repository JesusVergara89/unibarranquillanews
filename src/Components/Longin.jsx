import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../Styles/form.css';
import { Acesscontext } from './Context/Acesscontext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth2 } from '../firebaseconfig';
import { toast } from 'react-toastify';
import { useNavigate, Navigate } from 'react-router-dom';
import Loader from './Loader';
import { dataEncryp } from './Crypto/Encryp';

const Login = () => {
    const { IsLogged } = useContext(Acesscontext)
    const [show, setShow] = useState(false)
    const [Ok, setOk] = useState(true)
    const Navi = useNavigate()

    const Loginsuccess = (email, password) => {
        toast('inicio de session exitoso', { type: 'success' })
        window.localStorage.setItem('Email', dataEncryp(email))
        window.localStorage.setItem('Password', dataEncryp(password))
        setOk(true)
    }

    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

    const submit = ({ email, password }) => {
        setOk(false)
        signInWithEmailAndPassword(auth2, email, password)
            .then(() => { Loginsuccess(email, password) })
            .catch((error) => {
                toast(error.code, { type: "error" })
                setOk(true)
            })
    };

    const showPassword = () => setShow(!show)

    return (
        <>
            {IsLogged ?
                <Navigate to='/' replace={true} />
                : (
                    <form className='form_main' onSubmit={handleSubmit(submit)} >
                        <h3>Log in</h3>
                        <section className={watch('email') ? 'form_user on' : 'form_user'}>
                            <input autoComplete='off' className={errors.email?.type === 'required' || errors.email?.type === 'pattern' ? 'input_user on' : 'input_user'} type="text" inputMode='email' {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
                            <label>Email:</label>
                            <i className='bx bx-envelope' ></i>
                        </section>
                        {errors.email?.type === 'required' &&
                            <p className='error'>Por favor, ingrese el email.</p>
                        }
                        {errors.email?.type === 'pattern' &&
                            <p className='error'>Por favor, ingrese un correo electrónico válido.</p>
                        }
                        <section className={watch('password') ? 'form_password on' : 'form_password'}>
                            <input autoComplete='off' className={errors.password?.type === 'required' ? 'input_password on' : 'input_password'} type={show ? "text" : "password"}{...register("password", { required: true })} />
                            <label>Password</label>
                            <i className='bx bx-lock'></i>

                            <div onClick={showPassword} className="login-hiden">
                                {show ? <i className='bx bx-hide'></i> : <i className='bx bx-show'></i>}
                            </div>
                        </section>
                        {errors.password?.type === 'required' &&
                            <p className='error'>Por favor, ingrese una contraseña.</p>
                        }
                        {Ok ? <button className='protect-route-btn' type='submit'>Login</button>
                            : <Loader />
                        }
                        <p onClick={() => Navi('/FORGOT-PASSWORD')} className='forgetten'>
                            ¿Olvidaste tu contraseña?
                        </p>
                    </form>
                )}
        </>
    );
};

export default Login;
