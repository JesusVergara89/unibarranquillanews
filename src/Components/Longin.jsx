import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CompanyCollaboratorAccess from './CompanyCollaboratorAccess';
import '../Styles/Login.css';
import { useDispatch } from 'react-redux';
import { setEmailValue } from '../store/slices/email.slice';
import { setPassWordValue } from '../store/slices/password.slice';

const Login = ({ access, IsLogged, setIsLogged }) => {

    const [show, setShow] = useState(false)

    const [usedata, setUsedata] = useState()

    const dispatch = useDispatch();

    const objectReset = {
        email: '',
        password: ''
    };

    const { register, handleSubmit, reset } = useForm();

    const submit = ({ email, password }) => {
        // Buscar en el array 'access' un objeto que coincida tanto en el correo electrónico como en la contraseña
        const user = access.find(user => user.Email === email && user.Password === password);

        // Si se encuentra un usuario que coincida, setIsLogged se establece en true
        if (user) {
            dispatch(setEmailValue(user.Name)); // Guardar el nombre
            dispatch(setPassWordValue(user.LastName)); // Guardar el apellido
            setIsLogged(true);
        }
        setUsedata(user)

        // Reiniciar los valores del formulario
        reset(objectReset);
    };

    const showPassword = () => setShow(!show)

    return (
        <article className="protect-route">
            {IsLogged ? (
                <CompanyCollaboratorAccess usedata={usedata} IsLogged={IsLogged} setIsLogged={setIsLogged} />
            ) : (
                <form className='form-login' onSubmit={handleSubmit(submit)} >
                    <h3>Credenciales</h3>
                    <input className='form-input' placeholder='Email' {...register("email")} />
                
                        <input autoComplete="password" className='form-input' type={show ? "text" : "password"} placeholder='Password' {...register("password")} />
                        <div onClick={showPassword} className="login-hiden">
                            {show ? <i class='bx bx-hide'></i> : <i class='bx bx-show'></i>}
                        </div>
                   
                    <button className='protect-route-btn' type='submit'>Login</button>
                </form>
            )}
        </article>
    );
};

export default Login;
