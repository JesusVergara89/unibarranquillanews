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
import imageCompression from 'browser-image-compression';
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
    const options = {
        maxSizeMB: 5,
        maxWidthOrHeight: 140,
        useWebWorker: true,
    }
    const submit = async ({ photo, password_current, Newpassword }) => {
        try {
            let email = window.localStorage.getItem('Email');
            let password = window.localStorage.getItem('Password');
            setOk(false);
            if (photo[0] && !password_current) {
                //Compresión de imágenes
                const compressedFile = await imageCompression(photo[0], options);
                // se obtiene la referencia de la url de la imagen de perfil
                let referente = getRefimg();
                //se sube la nueva imagen con la misma referencia para realizar un update con la misma url
                const storageRef = ref(storage2, `/Perfiles/${referente}`);
                await uploadBytesResumable(storageRef, compressedFile);
                toast('Actualización exitosa', { type: 'success' });
                reseteo();
                window.location.replace('')
            } else if (password_current && !photo[0]) {
                await signInWithEmailAndPassword(auth2, dataDecryp(email), password_current);
                await Promise.all(ArrayofRouter.map(async (data) => {
                    await signInWithEmailAndPassword(data.Auth, dataDecryp(email), dataDecryp(password));
                    await updatePassword(data.Auth.currentUser, Newpassword);
                }));
                await signOut(auth2);
                toast('Actualización exitosa', { type: 'success' });
                reseteo();
            } else if (password_current && photo[0]) {
                await signInWithEmailAndPassword(auth2, dataDecryp(email), password_current);
                //Compresion de imagenes
                const compressedFile = await imageCompression(photo[0], options);
                // se obtiene la referencia de la url de la imagen de perfil
                let referente = getRefimg();
                //se sube la nueva imagen con la misma referencia para realizar un update con la misma url
                const storageRef = ref(storage2, `/Perfiles/${referente}`);
                await uploadBytesResumable(storageRef, compressedFile);
                await Promise.all(ArrayofRouter.map(async (data) => {
                    await signInWithEmailAndPassword(data.Auth, dataDecryp(email), dataDecryp(password));
                    await updatePassword(data.Auth.currentUser, Newpassword);
                }));
                await signOut(auth2);
                toast('Actualización exitosa', { type: 'success' });
                reseteo();
                window.localStorage.clear();
            }
        } catch (error) {
            toast(error.code, { type: 'error' });
            setOk(true);
        }
    };

    let value = watch('photo')
    const ValidatePhoto = () => {
        let validate
        if (value[0]) {
            // Extensiones permitidas
            const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'tif', 'webp', 'svg', 'raw', 'avi'];
            const extension = value[0].name.split('.').pop()
            validate = allowedExtensions.includes(extension)
        } else {
            validate = true
        }
        return validate
    }
    useEffect(() => {
        let e = value?.[0]
        if (e) {
            let Validatephoto = ValidatePhoto()
            if (Validatephoto) {
                let Size
                let SizeKb = (e.size / 1024).toFixed(1)
                if (SizeKb >= 1024) {
                    let SizeMb = (SizeKb / 1024).toFixed(1)
                    Size = `${SizeMb}MB`
                } else {
                    Size = `${SizeKb}KB`
                }
                const UrlImg = URL.createObjectURL(e)
                setInformImg({ size: Size, Url: UrlImg })
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
                        <input autoComplete='off' type='file' accept='image/*' {...register('photo', { validate: ValidatePhoto })} className='input_file' />
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