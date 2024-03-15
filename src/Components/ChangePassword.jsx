import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../Styles/ChangePassword.css';
import { useNavigate } from 'react-router-dom';
import { Acesscontext } from './Context/Acesscontext';

const ChangePassword = ({ name, lastName, functionOpen }) => {
    const { access } = useContext(Acesscontext)
    const navigate = useNavigate()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [newpass, setNewpass] = useState();
    const objReset = {
        _Password: '',
        Password: ''
    };

    const findUser =(name, lastName, access)=> {
        const firstName = name.toLowerCase();
        const surname = lastName.toLowerCase();

        for (const user of access) {
            if (user.Name.toLowerCase() === firstName && user.LastName.toLowerCase() === surname) {
                return user;
            }
        }

        return null;
    }

    let user = findUser(name, lastName, access)
    //console.log(user)
    const onSubmit = data => {
        const passwordRegex = /^[a-zA-Z].{5,}$/;
        if (data._Password === data.Password && passwordRegex.test(data.Password)) {
            let obj = {
                Id: user.Id,
                Email: user.Email,
                Password: data._Password,
                Name: user.Name,
                LastName: user.LastName
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
            <button onClick={() => updateFunction(user.Id)}>Come back</button>
        </article>
    );
};

export default ChangePassword;
