import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../Styles/ChangePassword.css';
import {useNavigate } from 'react-router-dom';
import { Accescontext } from './Context/AccesContext';

const ChangePassword = ({ functionOpen }) => {
    const{access}=useContext(Accescontext)
    const navigate = useNavigate()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [newpass, setNewpass] = useState();
    const objReset = {
        _Password: '',
        Password: ''
    };

    const onSubmit = data => {
        const passwordRegex = /^[a-zA-Z].{5,}$/; 
        if (data._Password === data.Password && passwordRegex.test(data.Password)) {
            let obj = {
                Id: access.Id,
                Email: access.Email,
                Password: data.Password,
                Name: access.Name,
                LastName: access.LastName
            };
            setNewpass(obj);
            reset(objReset);
        }
    };

    const passwordMatch = watch("Password") === watch("_Password");

    const updateFunction = id => {
        const getConfig = () => ({
            headers: {
                "Content-Type": "application/json",
            }
        });
        const URL = `https://sheet.best/api/sheets/d720e03d-9e40-4c12-9e9a-5e80210e3d7b/Id/*${id}*`;
        axios.put(URL, newpass, getConfig())
            .then(res => console.log('we did it'))
            .catch(err => console.log(err));
        functionOpen();
        ToHome()
    };

    console.log('Wn4$2lf!Jz0g@FwRmTbP9cOYiG8sHaQ3Kd7IhNt5oVjL6pCuXx1yEeUrSvMkD!BTm9I#cVfUx0zKjA4$Jw5dRnQhD!1rXyM6q2gPpN7oHkFtEeG3aYs8BcOvSbZiW7uI!G5Yx9A#Uz1w@PbDdRtF2n4VjJh6i0eL7mOoXcEgQr8pKfTqSsHvNk3CFwBcK3xMvQlJyTtLp5Xo9H!b8dGj2E$1NkPfCnD4iSgAeZrU#',newpass )

    const ToHome = () => {
        // Navegar a otra página
        navigate('/');
    };

    return (
        <article className="Change-pass">
            <form className='Change-pass-form' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='new password' type="password" {...register("_Password", { required: true, minLength: 6 })} />
                {errors._Password && errors._Password.type === "required" && <p>Este campo es obligatorio</p>}
                {errors._Password && errors._Password.type === "minLength" && <p>La contraseña debe tener al menos 6 caracteres</p>}
                <input placeholder='new password' type="password" {...register("Password", { required: true, minLength: 6, pattern: /^[a-zA-Z].{5,}$/ })} />
                {errors.Password && errors.Password.type === "required" && <p>Este campo es obligatorio</p>}
                {errors.Password && errors.Password.type === "minLength" && <p>La contraseña debe tener al menos 6 caracteres</p>}
                {errors.Password && errors.Password.type === "pattern" && <p>La contraseña debe comenzar con una letra</p>}
                {!passwordMatch && <p>Las contraseñas no coinciden</p>}
                <button type="submit" disabled={!passwordMatch || errors._Password || errors.Password}>Enter</button>
            </form>
            <button onClick={() => updateFunction(usedata.Id)}>Come back</button>
        </article>
    );
};

export default ChangePassword;
