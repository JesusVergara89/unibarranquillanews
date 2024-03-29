import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../Styles/Login.css';
import { useDispatch } from 'react-redux';
import { setEmailValue } from '../store/slices/email.slice';
import { setPassWordValue } from '../store/slices/password.slice';
import Createdarticles from './Createdarticles';
import { Acesscontext } from './Context/Acesscontext';

const Login = ({ IsLogged, setIsLogged }) => {
    const { access } = useContext(Acesscontext)

    const [show, setShow] = useState(false)

    const [usedata, setUsedata] = useState()

    const dispatch = useDispatch();

    const objectReset = {
        email: '',
        password: ''
    };

    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

    const submit = ({ email, password }) => {
        /*const user = access.find(user => user.Email === email && user.Password === password);
        if (user) {
            dispatch(setEmailValue(user.Name)); 
            dispatch(setPassWordValue(user.LastName)); 
            setIsLogged(true);
        }
        setUsedata(user)
        reset();
        */
    };

    const showPassword = () => setShow(!show)

    return (
        <article className="protect-route">
            {IsLogged ? (
                <Createdarticles IsLogged={IsLogged} setIsLogged={setIsLogged} />
            ) : (
                <form className='form-login' onSubmit={handleSubmit(submit)} >
                    <h3>Log in</h3>
                    <div className={watch('email') ? 'form_user on' : 'form_user'}>
                        <input autoComplete='off' className={errors.email?.type === 'required' || errors.email?.type === 'pattern' ? 'input_user on' : 'input_user'} type="text" inputMode='email' {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
                        <label>Email:</label>
                        <i className='bx bx-envelope' ></i>
                    </div>
                    {errors.email?.type === 'required' &&
                        <p className='error'>Este campo es obligatorio. Por favor, asegúrate de completarlo.</p>
                    }
                    {errors.email?.type === 'pattern' &&
                        <p className='error'>El correo ingresado es inválido. Por favor, digite un correo electrónico válido.</p>
                    }
                    <div className={watch('password') ? 'form_password on' : 'form_password'}>
                        <input autoComplete='off' className={errors.password?.type === 'required' ? 'input_password on' : 'input_password'} type={show ? "text" : "password"}{...register("password", { required: true })} />
                        <label>Password</label>
                        <i className='bx bx-lock'></i>

                        <div onClick={showPassword} className="login-hiden">
                            {show ? <i className='bx bx-hide'></i> : <i className='bx bx-show'></i>}
                        </div>
                    </div>
                    {errors.password?.type === 'required' &&
                        <p className='error'>Este campo es obligatorio. Por favor, asegúrate de completarlo.</p>
                    }
                    <button className='protect-route-btn' type='submit'>Login</button>
                    <p className='forgetten'>
                        ¿Olvidaste tu contraseña?
                    </p>
                </form>
            )}
        </article>
    );
};

export default Login;
