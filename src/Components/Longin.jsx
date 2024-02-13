import React from 'react';
import { useForm } from 'react-hook-form';
import CompanyCollaboratorAccess from './CompanyCollaboratorAccess';
import '../Styles/Login.css'

const Login = ({ access, IsLogged, setIsLogged }) => {
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
            setIsLogged(true);
            console.log("it works")
        }
        // Reiniciar los valores del formulario
        reset(objectReset);
    };

    return (
        <article className="protect-route">
            {IsLogged ?

                <CompanyCollaboratorAccess setIsLogged={setIsLogged} />

                :

                <form onSubmit={handleSubmit(submit)} >
                    <h3>Ingrese su usuario y contraseña</h3>
                    <input placeholder='Email' {...register("email")} />
                    <input placeholder='Password' {...register("password")} />
                    <button type='submit'>Login</button>
                </form>

            }
        </article>
    );
};

export default Login;
