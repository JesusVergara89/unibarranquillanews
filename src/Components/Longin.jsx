import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../Styles/Login.css';
import { useDispatch } from 'react-redux';
import { setEmailValue } from '../store/slices/email.slice';
import { setPassWordValue } from '../store/slices/password.slice';
import Createdarticles from './Createdarticles';
import { Acesscontext } from './Context/Acesscontext';

const Login = ({IsLogged, setIsLogged }) => {
    const{access}=useContext(Acesscontext)

    const [show, setShow] = useState(false)

    const [usedata, setUsedata] = useState()

    const dispatch = useDispatch();

    const objectReset = {
        email: '',
        password: ''
    };

    const { register, handleSubmit, reset } = useForm();

    const submit = ({ email, password }) => {
        const user = access.find(user => user.Email === email && user.Password === password);
        if (user) {
            dispatch(setEmailValue(user.Name)); 
            dispatch(setPassWordValue(user.LastName)); 
            setIsLogged(true);
        }
        setUsedata(user)
        reset(objectReset);
    };

    const showPassword = () => setShow(!show)

    return (
        <article className="protect-route">
            {IsLogged ? (
                <Createdarticles IsLogged={IsLogged} setIsLogged={setIsLogged} />
            ) : (
                <form className='form-login' onSubmit={handleSubmit(submit)} >
                    <h3>Credenciales</h3>
                    <input className='form-input' placeholder='Email' {...register("email")} />
                
                        <input autoComplete="password" className='form-input' type={show ? "text" : "password"} placeholder='Password' {...register("password")} />
                        <div onClick={showPassword} className="login-hiden">
                            {show ? <i className='bx bx-hide'></i> : <i className='bx bx-show'></i>}
                        </div>
                   
                    <button className='protect-route-btn' type='submit'>Login</button>
                </form>
            )}
        </article>
    );
};

export default Login;
