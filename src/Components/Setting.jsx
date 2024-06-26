import React, { useContext, useEffect, useState } from 'react'
import '../Styles/setting.css'
import '../Styles/form.css'
import { Acesscontext } from './Context/Acesscontext'
import { useForm } from 'react-hook-form'
import { signInWithEmailAndPassword, signOut, updatePassword } from 'firebase/auth'
import { auth2, storage2 } from '../firebaseconfig'
import { ref, uploadBytesResumable } from 'firebase/storage'
import { toast } from 'react-toastify'
import useRouter from '../Hooks/useRouter'
import Loader from './Loader'
import { dataDecryp } from './Crypto/Decryp'
import Compressor from 'compressorjs';
// million-ignore
const Setting = ({ setstatesetting, statesetting }) => {
    const { AccessInfor } = useContext(Acesscontext)
    const [Ok, setOk] = useState(true)
    const [show, setShow] = useState(false)
    const [showCurrent, setshowCurrent] = useState(false)
    const [InformImg, setInformImg] = useState()
    const { ArrayofRouter } = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        resetField,
        formState: { errors },
        watch
    } = useForm();
    const reseteo = () => {
        reset({ password_current: '', Newpassword: '', photo: null })
        setInformImg(null)
        setstatesetting(false)
        setOk(true);
    }
    const getRefimg = () => {
        const url = AccessInfor.PhotoUrl
        const Urlobject = decodeURIComponent(url)
        const regex = /Perfiles\/(.*?)\?/;
        const match = Urlobject.match(regex);
        return match[1]
    }

    const submit = async ({ password_current, Newpassword }) => {
        try {
            let email = window.localStorage.getItem('Email');
            let password = window.localStorage.getItem('Password');
            setOk(false);
            await signInWithEmailAndPassword(auth2, dataDecryp(email), dataDecryp(password))
            if (InformImg) {
                let referente = getRefimg();
                const storageRef = ref(storage2, `/Perfiles/${referente}`);
                await uploadBytesResumable(storageRef, InformImg.File);
            }
            if (password_current) {
                await signInWithEmailAndPassword(auth2, dataDecryp(email), password_current);
                await Promise.all(ArrayofRouter.map(async (data) => {
                    await signInWithEmailAndPassword(data.Auth, dataDecryp(email), dataDecryp(password));
                    await updatePassword(data.Auth.currentUser, Newpassword);
                }));
                await signOut(auth2);
                window.localStorage.clear();
            }
            toast('Actualización exitosa', { type: 'success' });
            reseteo();
            window.location.reload()

        } catch (error) {
            toast(error.code, { type: 'error' });
            setOk(true);
        }
    };

    let value = watch('photo')
    const ValidatePhoto = () => {
        // Extensiones permitidas
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'svg', 'avif'];
        const extension = value?.[0].name.split('.').pop()
        return allowedExtensions.includes(extension)
    }

    useEffect(() => {
        let e = value?.[0]
        if (e) {
            let Validatephoto = ValidatePhoto()
            if (Validatephoto) {
                new Compressor(e, {
                    quality: 0.8,
                    maxWidth: 400,
                    maxHeight: 400,
                    success(result) {
                        const UrlImg = URL.createObjectURL(result)
                        setInformImg({ Url: UrlImg, File: result })
                    },
                    error(err) {
                        console.log(err)
                    }
                })
            } else if (InformImg) {
                toast('Formato de archivo invalido, solo imágenes', { type: "error" });
            } else {
                toast('Formato de archivo invalido, solo imágenes', { type: "error" });
                resetField('photo')
                setInformImg(null)
            }
        }
    }, [value])
    const Validapassword = (password1, password2) => {
        return (password1 != '' && password2 != '') || !(password1 != '')
    }

    return (
        <main className={statesetting ? 'setting_main on' : 'setting_main off'}>
            <section className='setting_modal'>
                <section className='edit_photo'>
                    <div>
                        <input autoComplete='off' type='file' accept='image/*' {...register('photo')} className='input_file' />
                        {InformImg ?
                            <img src={InformImg.Url} />
                            :
                            <img src={AccessInfor?.PhotoUrl} alt="" />
                        }
                        <i className='bx bxs-camera'></i>
                    </div>
                    <p>{AccessInfor?.Name}</p>
                </section>
                <div className='form_password_main'>
                    <h3>Cambio de contraseña</h3>

                    <section className={watch('password_current') ? 'form_password on' : 'form_password'}>
                        <input autoComplete='off' className={errors.password_current?.type === 'validate' ? 'input_password on' : 'input_password'} type={showCurrent ? "text" : "password"} {...register("password_current", {
                            validate: () => {
                                return Validapassword(watch('Newpassword'), watch('password_current'))
                            }
                        })} />
                        <label>Contraseña actual</label>
                        <i className='bx bx-lock'></i>
                        <div onClick={() => setshowCurrent(prev => !prev)} className="login-hiden">
                            {showCurrent ? <i className='bx bx-hide'></i> : <i className='bx bx-show'></i>}
                        </div>
                    </section>

                    <section className={watch('Newpassword') ? 'form_password on' : 'form_password'}>
                        <input autoComplete='off' className={errors.Newpassword?.type === 'validate' ? 'input_password on' : 'input_password'} type={show ? "text" : "password"}{...register("Newpassword", {
                            validate: () => {
                                return Validapassword(watch('password_current'), watch('Newpassword'))
                            }
                        })} />
                        <label>Nueva contraseña</label>
                        <i className='bx bx-lock'></i>

                        <div onClick={() => setShow(prev => !prev)} className="login-hiden">
                            {show ? <i className='bx bx-hide'></i> : <i className='bx bx-show'></i>}
                        </div>
                    </section>
                    <div className='bottonera'>
                        {Ok ?
                            <>
                                <button className='cancel' onClick={reseteo}>Cancelar</button>
                                <button className={watch('photo')?.[0] || watch('password_current') || watch('password') ? 'save on' : 'save'} onClick={handleSubmit(submit)}>Guardar</button>
                            </>
                            : <Loader />
                        }
                    </div>
                </div>
            </section>
            <div onClick={reseteo} className='close' />
        </main>
    )
}

export default Setting