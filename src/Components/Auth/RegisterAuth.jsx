import React, { useContext, useEffect, useState } from 'react'
import '../../Styles/form.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import useRouter from '../../Hooks/useRouter'
import { auth2, db2, storage2 } from '../../firebaseconfig'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import Loader from '../Loader'
import Compressor from 'compressorjs';
import { addDoc, collection } from 'firebase/firestore'
import { dataDecryp } from '../Crypto/Decryp'
import { Acesscontext } from '../Context/Acesscontext'
import { Navigate } from 'react-router-dom';
// million-ignore
const RegisterAuth = () => {
    const [show, setShow] = useState(false)
    const [InformImg, setInformImg] = useState()
    const { ArrayofRouter } = useRouter()
    const { Admin } = useContext(Acesscontext)
    const [Ok, setOk] = useState(true)
    const {
        register,
        handleSubmit,
        reset,
        resetField,
        formState: { errors },
        watch
    } = useForm();
    const submit = async ({ email, password, name }) => {
        setOk(false)
        try {
            const storageRef = ref(storage2, `/Perfiles/${Date.now()}${name.toLowerCase()}`);
            const snapshot = await uploadBytesResumable(storageRef, InformImg.File);
            //se obtiene la url de la imagen subida
            const url = await getDownloadURL(snapshot.ref);
            // Crear usuarios en todos los routers
            await Promise.all(ArrayofRouter.map(async (user) => {
                await createUserWithEmailAndPassword(user.Auth, email, password);
                await updateProfile(user.Auth.currentUser, { displayName: name.toLowerCase(), photoURL: url });
            }));
            const emailLocal = window.localStorage.getItem('Email');
            const passwordLocal = window.localStorage.getItem('Password');
            await signInWithEmailAndPassword(auth2, dataDecryp(emailLocal), dataDecryp(passwordLocal))
            const articleRef = collection(db2, 'User');
            await addDoc(articleRef, {
                Email: email.toLowerCase(),
                Name: name.toLowerCase()
            });
            toast('Usuario creado con éxito', { type: 'success' });
            reset({ email: '', password: '', name: '', photo: null });
            setInformImg(null);
            setOk(true)
        } catch (error) {
            toast(error.code, { type: 'error' }, setOk(true));
        }
    };
    const showPassword = () => setShow(!show)

    const ValidatePhoto = () => {
        // Extensiones permitidas
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'svg', 'avif'];
        const extension = value?.[0].name.split('.').pop()
        return allowedExtensions.includes(extension)
    }
    const Sizeimg = (file) => {
        let Size
        let SizeKb = (file.size / 1024).toFixed(1)
        if (SizeKb >= 1024) {
            let SizeMb = (SizeKb / 1024).toFixed(1)
            Size = `${SizeMb} MB`
        } else {
            Size = `${SizeKb} KB`
        }
        return Size
    }

    let value = watch('photo')
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
                        let Size = Sizeimg(e)
                        let SizeCompri = Sizeimg(result)
                        const UrlImg = URL.createObjectURL(result)
                        setInformImg({ size: Size, sizeCompri: SizeCompri, Url: UrlImg, File: result })
                    },
                    error(err) {
                        console.log(err)
                    }
                })
            } else if (InformImg) {
                toast('Formato de archivo invalido, solo imágenes', { type: "error" });
            } else {
                setInformImg(null)
            }
        }
    }, [value])

    const Validateimg = (e) => {
        let Validatephoto = true
        if (e?.[0] && !InformImg) {
            // Extensiones permitidas
            const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'svg', 'avif'];
            const extension = e[0].name.split('.').pop()
            Validatephoto = allowedExtensions.includes(extension)
        }
        return Validatephoto
    }
    return (
        <>
            {Admin ? 
            <form className='form_main' onSubmit={handleSubmit(submit)} >
                <h3>Register</h3>
                <div className={watch('name') ? 'form_user on' : 'form_user'}>
                    <input autoComplete='off' className={errors.name?.type === 'required' || errors.name?.type === 'pattern' ? 'input_user on' : 'input_user'} type="text" {...register("name", { required: true })} />
                    <label>Name</label>
                    <i className='bx bx-user'></i>
                </div>
                {errors.name?.type === 'required' &&
                    <p className='error'>Por favor, ingrese el nombre.</p>
                }
                <div className={watch('email') ? 'form_user on' : 'form_user'}>
                    <input autoComplete='off' className={errors.email?.type === 'required' || errors.email?.type === 'pattern' ? 'input_user on' : 'input_user'} type="text" inputMode='email' {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
                    <label>Email:</label>
                    <i className='bx bx-envelope' ></i>
                </div>
                {errors.email?.type === 'required' &&
                    <p className='error'>Por favor, ingrese el email.</p>
                }
                {errors.email?.type === 'pattern' &&
                    <p className='error'>Por favor, ingrese un correo electrónico válido.</p>
                }
                <div className={watch('password') ? 'form_password on' : 'form_password'}>
                    <input autoComplete='off' className={errors.password?.type === 'required' ? 'input_password on' : 'input_password'} type={show ? "text" : "password"}{...register("password", { required: true })} />
                    <label>Password</label>
                    <i className='bx bx-lock'></i>

                    <div onClick={showPassword} className="login-hiden">
                        {show ? <i className='bx bx-hide'></i> : <i className='bx bx-show'></i>}
                    </div>
                </div>
                {errors.password?.type === 'required' &&
                    <p className='error'>Por favor, ingrese una contraseña.</p>
                }
                <section className={errors.photo?.type === 'required' || errors.photo?.type === 'validate' ? 'form_file on' : 'form_file'}>
                    <label>Subir foto de perfil</label>
                    <div className={errors.photo?.type === 'required' || errors.photo?.type === 'validate' ? 'file_imagen on' : 'file_imagen'}>
                        <input autoComplete='off' type='file' accept='image/*' {...register('photo', {
                            required: true, validate: () => {
                                return Validateimg(watch('photo'))
                            }

                        })} className='input_file' />
                        {InformImg ?
                            <img src={InformImg.Url} />
                            : <>
                                <i className='bx bx-image-add'></i>
                                <p>Seleccione el archivo a subir</p>
                            </>
                        }
                    </div>
                    {InformImg &&
                        <section className='information_imagen'>
                            <p>Archivo cargado</p>
                            <div className='data_imagen'>
                                <i className='bx bx-file-blank'></i>
                                <p>{InformImg.size}</p>
                                <p>{InformImg.sizeCompri}</p>
                                <i onClick={() => {
                                    resetField('photo')
                                    setInformImg(null)
                                }} className='bx bx-x'></i>
                            </div>
                        </section>
                    }
                </section>
                {errors.photo?.type === 'required' &&
                    <p className='error'>Por favor, suba el archivo.</p>
                }
                {errors.photo?.type === 'validate' ?
                    <p className='error'>Formato de archivo invalido, solo imágenes</p>
                    : ''
                }
                {Ok ? <button className='protect-route-btn' type='submit'>Register</button>
                    : <Loader />
                }
            </form>
                : <Navigate to='/' replace={true} />}
        </>
    )
}

export default RegisterAuth