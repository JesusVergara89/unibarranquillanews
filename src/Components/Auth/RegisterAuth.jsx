import React, { useEffect, useState } from 'react'
import '../../Styles/form.css'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import useRouter from '../../Hooks/useRouter'
import { storage2 } from '../../firebaseconfig'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
// million-ignore
const RegisterAuth = () => {
    const [show, setShow] = useState(false)
    const [InformImg, setInformImg] = useState()
    const [ErrorPhoto, setErrorPhoto] = useState(false)
    const { ArrayofRouter } = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        resetField,
        formState: { errors },
        watch
    } = useForm();

    const submit = async ({ email, password, name, photo }) => {
        try {
            //se carga la imagen al store de la seccion actualidad
            const storageRef = ref(storage2, `/images/${Date.now()}${name}`);
            const snapshot = await uploadBytesResumable(storageRef, photo[0]);
            //se obtiene la url de la imagen subida
            const url = await getDownloadURL(snapshot.ref);
            // Crear usuarios en todos los routers
            await Promise.all(ArrayofRouter.map(async (user) => {
                await createUserWithEmailAndPassword(user.Auth, email, password);
                await updateProfile(user.Auth.currentUser, { displayName: name, photoURL: url });
            }));
            toast('Usuario creado exitoso', { type: 'success' });
            reset({ email: '', password: '', name: '', photo: null });
            setInformImg(null);
        } catch (error) {
            toast(error.code, { type: 'error' });
        }
    };
    const showPassword = () => setShow(!show)

    const ValidatePhoto = () => {
        // Extensiones permitidas
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'tif', 'webp', 'svg', 'raw'];
        const extension = value?.[0].name.split('.').pop()
        return allowedExtensions.includes(extension)
    }
    let value = watch('photo')
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
    return (
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
            <section className={errors.photo?.type === 'required' || errors.photo?.type === 'validate' || ErrorPhoto ? 'form_file on' : 'form_file'}>
                <label>Subir foto de perfil</label>
                <div className={errors.photo?.type === 'required' || errors.photo?.type === 'validate' || ErrorPhoto ? 'file_imagen on' : 'file_imagen'}>
                    <input autoComplete='off' type='file' accept='image/*' {...register('photo', { required: true, validate: ValidatePhoto })} className='input_file' />
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
            {errors.photo?.type === 'validate' || ErrorPhoto ?
                <p className='error'>Formato de archivo invalido, solo imágenes</p>
                : ''
            }
            <button className='protect-route-btn' type='submit'>Register</button>
        </form>
    )
}

export default RegisterAuth