import React, { useEffect, useState } from 'react'
import '../Styles/form.css'
import '../Styles/setting.css'
import 'quill-paste-smart';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { Controller, useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { ref, uploadBytesResumable } from 'firebase/storage'
import { doc, updateDoc } from 'firebase/firestore'
import Loader from './Loader'
import { dataDecryp } from './Crypto/Decryp'
import Compressor from 'compressorjs';
// million-ignore
const Editor = ({ data, autenti, Subsecion, ID, setEditar}) => {
    const [focusDescrip, setfocusDescrip] = useState(false)
    const [InformImg, setInformImg] = useState()
    const [Ok, setOk] = useState(true)
    const { control,
        register,
        handleSubmit,
        reset,
        resetField,
        setValue,
        formState: { errors },
        watch
    } = useForm()
    useEffect(() => {
        setValue('title', data.title)
        setValue('link', data.link)
        setValue('Description', data.description)
        window.scrollTo(0, 0)
    }, [])
    const getRefimg = () => {
        const url = data.imageUrl
        const Urlobject = decodeURIComponent(url)
        const regex = /images\/(.*?)\?/;
        const match = Urlobject.match(regex);
        return match[1]
    }
    const submit = async ({ title, link, Description }) => {
        setOk(false);
        try {
            const collectionName = Subsecion || 'Articles';
            const email = window.localStorage.getItem('Email');
            const password = window.localStorage.getItem('Password');
            await signInWithEmailAndPassword(autenti.Auth, dataDecryp(email), dataDecryp(password));
            if (InformImg) {
                let referente = getRefimg();
                const storageRef = ref(autenti.Storage, `/images/${referente}`);
                await uploadBytesResumable(storageRef, InformImg.File);
            }
            const docRef = doc(autenti.Database, collectionName, ID)
            await updateDoc(docRef, {
                title: title,
                description: Description,
                link: link
            });

            toast('Noticia actualizada con exito', { type: 'success' });
            reset({ title: '', link: '', photo: null });
            setInformImg(null);
            setOk(true);
            setEditar(false)
        } catch (error) {
            console.log(error);
            toast('Error al actualizar la noticia', { type: "error" });
            setOk(true);
        }
    };

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
                toast('Formato de archivo invalido, solo imágenes', { type: "error" });
                resetField('photo')
                setInformImg(null)
            }
        }
    }, [value])

    const toolbarOptions = [
        ['bold', 'italic', 'underline'],
        ['blockquote'],
        ['link', 'formula'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }]
    ];

    const modules = {
        toolbar: toolbarOptions
    }

    return (
        <main className='form_main create' >
            <section className={watch('title') ? 'form_user on' : 'form_user'}>
                <input autoComplete='off' type='text'{...register('title', { required: true })} className={errors.title?.type === 'required' ? 'input_user on' : 'input_user'} />
                <i className='bx bx-edit-alt'></i>
                <label>Titulo</label>
            </section>
            {errors.title?.type === 'required' &&
                <p className='error'>Por favor, ingrese el titulo.</p>
            }
            <section className={errors.Description?.type === 'required' || errors.Description?.type === 'validate' ? 'form_editor on' : 'form_editor'}>
                <label>Descripción</label>
                <Controller
                    name='Description'
                    control={control}
                    rules={{
                        required: 'true', validate: () => {
                            return watch('Description') != '<p><br></p>'
                        }
                    }}
                    render={({ field }) => (
                        <ReactQuill
                            modules={modules}
                            theme="snow"
                            value={field.value}
                            onChange={field.onChange}
                            onFocus={() => setfocusDescrip(true)}
                            onBlur={() => setfocusDescrip(false)}
                            className={focusDescrip ? 'form-article-textarea on' : 'form-article-textarea'}
                        />
                    )}
                />
            </section>
            {errors.Description?.type === 'required' || errors.Description?.type === 'validate' ?
                <p className='error'>Por favor, ingrese la descripción.</p>
                : ''
            }
            <section className={watch('link') ? 'form_user on' : 'form_user'}>
                <input autoComplete='off' type='text'{...register('link', { required: true })} className={errors.link?.type === 'required' || errors.link?.type === 'pattern' ? 'input_user on' : 'input_user'} />
                <i className='bx bx-link'></i>
                <label>Link</label>
            </section>
            {errors.link?.type === 'required' &&
                <p className='error'>Por favor, ingrese el link.</p>
            }

            <section className='form_file'>
                <label>Subir archivo</label>
                <div className='file_imagen'>
                    <input autoComplete='off' type='file' accept='image/*' {...register('photo')} className='input_file' />
                    {InformImg ?
                        <img src={InformImg.Url} />
                        : <img src={data.imageUrl} />
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

            <div className='bottonera'>
                {Ok ?
                    <>
                        <button className='cancel' onClick={() => setEditar(false)}>Regresar</button>
                        <button className={watch('title') != data.title || watch('Description') != data.description || watch('photo')?.[0] || watch('link') != data.link ? 'save on' : 'save'} onClick={handleSubmit(submit)}>Publicar</button>
                    </>
                    : <Loader />
                }
            </div>
        </main >
    )
}

export default Editor