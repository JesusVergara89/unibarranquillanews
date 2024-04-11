import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import '../Styles/form.css'
import Loader from './Loader';
import { Resend } from 'resend';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db2 } from '../firebaseconfig';
import axios from 'axios';
// million-ignore
const ForgotPassword = () => {
    const resend = new Resend('re_K9F6q77P_6VtX3YSbBP9QhisiLs5NroQm');
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const [Ok, setOk] = useState(true)
    const [Response, setResponse] = useState()
    const [Code, setCode] = useState()
    const TemplateEmail = (email, project, code) => {
        return (
            <div>
                <p>
                    Hola:

                    Ingresa el siguiente código para restablecer la contraseña de <strong>{project}</strong> para tu cuenta de <strong>{email}</strong>.
                </p>
                <p>
                    Código: <strong>{code}</strong>

                    Si no solicitaste el restablecimiento de tu contraseña, puedes ignorar este correo electrónico.

                    Gracias.
                </p>
                <p>
                    El equipo de <strong>{project}</strong>

                </p >
            </div >
        )
    }
    const submit = ({ email }) => {
        let EmailPas = email.toLowerCase()
        const articleRef = collection(db2, "User")
        const q = query(articleRef, where('Email', '==', EmailPas))
        getDocs(q)
            .then((resp) => {
                let doc = resp.docs?.[0]?.data()
                if (doc) {
                    setResponse(true)
                    let code = Math.floor(Math.random() * 1000000) + 1
                } else {
                    setResponse(false)
                }
            })
    }
    const postData = {
        from: 'onboarding@resend.dev',
        to: 'escorciabrian37@gmail.com',
        subject: 'Hello World',
        html: '<strong>it works!</strong>'
    };

    const apiUrl = 'https://api.resend.com/emails';
    const accessToken = 're_K9F6q77P_6VtX3YSbBP9QhisiLs5NroQm';

    useEffect(() => {
        axios.post(apiUrl, postData, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])

    return (
        <form className='form_main' onSubmit={handleSubmit(submit)} >
            <h3>Reset password</h3>
            <p className='Description_password'>Ingresa el correo electrónico para restablecer la contraseña.</p>
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
            {Ok ? <button className='protect-route-btn' type='submit'>Send code</button>
                : <Loader />
            }
        </form>
    )
}

export default ForgotPassword