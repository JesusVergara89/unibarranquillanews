import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import '../Styles/form.css'
import Loader from './Loader';
import { collection, count, getDocs, query, where } from 'firebase/firestore';
import { auth2, db2 } from '../firebaseconfig';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
// million-ignore
const ForgotPassword = () => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const [Ok, setOk] = useState(true)
    const [Response, setResponse] = useState(false)
    const [ResponseCode, setResponseCode] = useState(false)
    const [Count, setCount] = useState(0)
    const [Code, setCode] = useState()
    const [Minutes, setMinutes] = useState(2)
    const [Seconds, setSeconds] = useState(59)

    const serviceId = 'service_b5nfgm3'
    const templateId = 'template_7rhcqeo'
    const publicKey = 'KZPN-6dBoVD5Tidx5'

    const SendEmail = (name, email, code) => {

        const templateParams = {
            to_email: email,
            to_name: name,
            code: code,
        };
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

    const submit = ({ email }) => {
        setOk(false)
        let EmailPas = email.toLowerCase()
        const articleRef = collection(db2, "User")
        const q = query(articleRef, where('Email', '==', EmailPas))
        getDocs(q)
            .then((resp) => {
                let doc = resp.docs?.[0]?.data()
                if (doc) {
                    setResponse(true)
                    let code = Math.floor(Math.random() * 1000000) + 1
                    setCode(code)
                    SendEmail(doc.Name, doc.Email, code)
                    toast('Código de seguridad enviado al correo', { type: 'success' });

                } else {
                    setResponse(false)
                    toast('El correo electrónico no se encuentra registrado', { type: 'error' });
                    setOk(true)
                }
            })
    }
    const submit_code = ({ code }) => {
        setOk(false)
        if (code === Code) {
            setResponseCode(true)
            setOk(true)
        } else {
            reset()
            setCount(prev => prev + 1)
            if (Count >= 3) {
                <Navigate to='/' replace={true} />
            }
            toast('El código de seguridad es invalido', { type: 'error' });
            setOk(true)
        }
    }

    const submit_password = async ({ password, confipassword }) => {
        try {
            setOk(false);
            if (password === confipassword) {
                await Promise.all(ArrayofRouter.map(async (data) => {
                    await signInWithEmailAndPassword(data.Auth, dataDecryp(email), dataDecryp(password));
                    await updatePassword(data.Auth.currentUser, Newpassword);
                }));
                await signOut(auth2);
                window.localStorage.clear();
            }
            toast('Actualización exitosa', { type: 'success' });
            reseteo();

        } catch (error) {
            toast(error.code, { type: 'error' });
            setOk(true);
        }
    };

    useEffect(() => {
        if (Response) {
            const Timer = setInterval(() => {
                setSeconds(prev => prev - 1)
                if (Seconds === 0) {
                    setMinutes(prev => prev - 1)
                    setSeconds(59)
                }
                if (Minutes === 0) {
                    <Navigate to='/' replace={true} />
                }
            }, 1000);
            return () => {
                clearInterval(Timer)
            }
        }
    })


    return (
        <>
            {Response ?
                <form className='form_main' onSubmit={handleSubmit(submit_code)} >
                    <h3>Authy Verification</h3>
                    <p className='Description_password'>Ingresa el código de seguridad enviado al correo.</p>
                    <section className={watch('code') ? 'form_user on' : 'form_user'}>
                        <input autoComplete='off' className={errors.code?.type === 'required' || errors.code?.type === 'pattern' ? 'input_user on' : 'input_user'} type="text" inputMode='numeric' {...register("code", { required: true, pattern: /^\d+(\.\d+)?$/ })} />
                        <label>Code:</label>
                        <i className='bx bx-barcode'></i>
                    </section>
                    {errors.code?.type === 'required' &&
                        <p className='error'>Por favor, ingrese el Código.</p>
                    }
                    {errors.code?.type === 'pattern' &&
                        <p className='error'> Ingrese solamente numero</p>

                    }
                    <p className='Timer'>Tiempo máximo {Minutes}:{Seconds}</p>
                    {Ok ? <button className='protect-route-btn' type='submit'>Send Verification</button>
                        : <Loader />
                    }
                </form>
                :
                <form className='form_main' onSubmit={handleSubmit(submit)} >
                    <h3>Forgot Password</h3>
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
            }
        </>
    )
}

export default ForgotPassword