import React, { useContext, useEffect, useState } from 'react'
import '../Styles/setting.css'
import '../Styles/form.css'
import { Acesscontext } from './Context/Acesscontext'
import { useForm } from 'react-hook-form'
import { validatePassword } from 'firebase/auth'
import { storage2 } from '../firebaseconfig'
import { ref, uploadBytesResumable } from 'firebase/storage'
import { toast } from 'react-toastify'
// million-ignore
const Setting = () => {
    const { IsLogged, AccessInfor } = useContext(Acesscontext)
    const [show, setShow] = useState(false)
    const [showCurrent, setshowCurrent] = useState(false)
    const [ErrorPhoto, setErrorPhoto] = useState(false)
    const [InformImg, setInformImg] = useState()
    const { control,
        register,
        handleSubmit,
        reset,
        resetField,
        formState: { errors },
        watch
    } = useForm();
    const getRefimg = () => {
        const url = AccessInfor.PhotoUrl
        const Urlobject = decodeURIComponent(url)
        const regex = /images\/(.*?)\?/;
        const match = Urlobject.match(regex);
        console.log(match[1])
        return match[1]
    }
    const submit = ({ photo, password_current, password }) => {
        //se verifica que exite archivo
        if (photo[0]) {
            //se obtiene la referencia de la imagen de usuario
            let referente = getRefimg()
            const storageRef = ref(storage2, `/images/${referente}`);
            uploadBytesResumable(storageRef, photo[0])
                .then(() => {
                    toast('Actualización exitosa', { type: 'success' });
                })
        }

    }
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
                setErrorPhoto(false)
            } else {
                setErrorPhoto(true)
            }
        }
    }, [value])
    const Validapassword = (password1, password2) => {
        return (password1 && password2) || !password1
    }

    return (
        <section className='setting_main'>
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
                    <input autoComplete='off' className={errors.password_current?.type === 'validate' ? 'input_password on' : 'input_password'} type={showCurrent ? "text" : "password"}{...register("password_current", {
                        validate: () => {
                            return Validapassword(watch('password'), watch('password_current'))
                        }
                    })} />
                    <label>Contraseña actual</label>
                    <i className='bx bx-lock'></i>
                    <div onClick={() => setshowCurrent(prev => !prev)} className="login-hiden">
                        {showCurrent ? <i className='bx bx-hide'></i> : <i className='bx bx-show'></i>}
                    </div>
                </section>

                <section className={watch('password') ? 'form_password on' : 'form_password'}>
                    <input autoComplete='off' className={errors.password?.type === 'validate' ? 'input_password on' : 'input_password'} type={show ? "text" : "password"}{...register("password", {
                        validate: () => {
                            return Validapassword(watch('password_current'), watch('password'))
                        }
                    })} />
                    <label>Nueva contraseña</label>
                    <i className='bx bx-lock'></i>

                    <div onClick={() => setShow(prev => !prev)} className="login-hiden">
                        {show ? <i className='bx bx-hide'></i> : <i className='bx bx-show'></i>}
                    </div>
                </section>
                <div className='bottonera'>
                    <button className='cancel'>Cancelar</button>
                    <button className={watch('photo')?.[0] || watch('password_current') != '' || watch('password') != '' ? 'save on' : 'save'} onClick={handleSubmit(submit)}>Guardar</button>
                </div>
            </div>
        </section>
    )
}

export default Setting