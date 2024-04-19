import React, { useContext, useEffect, useState } from 'react'
import '../Styles/form.css'
import 'quill-paste-smart';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import useRouter from '../Hooks/useRouter'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { Acesscontext } from './Context/Acesscontext'
import Loader from './Loader'
import { dataDecryp } from './Crypto/Decryp'
import Compressor from 'compressorjs';
// million-ignore
const Createdarticles = () => {
  const [focusDescrip, setfocusDescrip] = useState(false)
  const [InformImg, setInformImg] = useState()
  const { AccessInfor } = useContext(Acesscontext)
  const [Ok, setOk] = useState(true)
  const { control,
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
    watch
  } = useForm()

  const submit = async ({ title, link, SecionMain, Subsecion, Description }) => {
    try {
      setOk(false);
      const collectionName = Subsecion?.value || 'Articles';
      const email = window.localStorage.getItem('Email');
      const password = window.localStorage.getItem('Password');
      const autenti = ArrayofRouter.find(data => data.Url === SecionMain.value);
      await signInWithEmailAndPassword(autenti.Auth, dataDecryp(email), dataDecryp(password));
      const storageRef = ref(autenti.Storage, `/images/${Date.now()}${InformImg.name}`);
      const snapshot = await uploadBytesResumable(storageRef, InformImg.File);
      const url = await getDownloadURL(snapshot.ref);
      const articleRef = collection(autenti.Database, collectionName);
      await addDoc(articleRef, {
        title: title,
        description: Description,
        link: link,
        autor: AccessInfor.Name,
        imageUrl: url,
        createdAt: Timestamp.now().toDate(),
        avatar: AccessInfor.PhotoUrl
      });

      toast('Noticia añadida correctamente', { type: 'success' });
      reset({ title: '', link: '', SecionMain: '', Subsecion: '', photo: null });
      setInformImg(null);
      setOk(true);
    } catch (error) {
      console.log(error);
      toast('Error al añadir noticia', { type: "error" });
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
          quality: 0.6,
          success(result) {
            let Size = Sizeimg(e)
            let SizeCompri = Sizeimg(result)
            const UrlImg = URL.createObjectURL(result)
            setInformImg({ size: Size, sizeCompri: SizeCompri, Url: UrlImg, File: result, name: result.name })
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
  const { ArrayofRouter } = useRouter()
  /*Filtro todas las subsecciones que coicida con el seccionmain */
  let filterarrayOfSubseccion = ArrayofRouter.filter(data => data.Url === watch('SecionMain')?.value && data.Subseccion)

  let OptionMain = []
  ArrayofRouter.map(data => {
    let option = { value: data.Url, label: data.Url.toLowerCase() }
    OptionMain.push(option)
  }
  )
  let OptionSub = []
  if (filterarrayOfSubseccion[0]) {
    filterarrayOfSubseccion[0].Subseccion.map(data => {
      let option = { value: data.Url, label: data.Url.toLowerCase() }
      OptionSub.push(option)
    }
    )
  }

  const toolbarOptions = [
    ['bold', 'italic', 'underline'],
    ['blockquote'],
    ['link', 'formula'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }]
  ];

  const modules = {
    toolbar: toolbarOptions
  }
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
    <form onSubmit={handleSubmit(submit)} className='form_main create' >
      <h3>Create Article</h3>
      <section className={watch('title') ? 'form_user on' : 'form_user'}>
        <input autoComplete='off' type='text'{...register('title', { required: true })} className={errors.title?.type === 'required' ? 'input_user on' : 'input_user'} />
        <i className='bx bx-edit-alt'></i>
        <label>Titulo</label>
      </section>
      {errors.title?.type === 'required' &&
        <p className='error'>Por favor, ingrese el titulo.</p>
      }
      <section className={errors.Description?.type === 'required' ? 'form_editor on' : 'form_editor'}>
        <label>Descripción</label>
        <Controller
          name='Description'
          control={control}
          rules={{
            required: 'true'
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
      {errors.Description?.type === 'required' &&
        <p className='error'>Por favor, ingrese la descripción.</p>
      }
      <section className={watch('link') ? 'form_user on' : 'form_user'}>
        <input autoComplete='off' type='text'{...register('link', { required: true })} className={errors.link?.type === 'required' || errors.link?.type === 'pattern' ? 'input_user on' : 'input_user'} />
        <i className='bx bx-link'></i>
        <label>Link</label>
      </section>
      {errors.link?.type === 'required' &&
        <p className='error'>Por favor, ingrese el link.</p>
      }
      <section className={errors.photo?.type === 'required' || errors.photo?.type === 'validate' ? 'form_file on' : 'form_file'}>
        <label>Subir archivo</label>
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
      <section className={errors.SecionMain?.type === 'required' ? 'form_select on' : 'form_select'}>
        <label>Sección</label>
        <Controller
          name='SecionMain'
          control={control}
          rules={{ required: 'true' }}
          render={({ field }) => (
            <Select
              {...field}
              options={OptionMain}
              className='Input_select'
              styles={{
                indicatorsContainer: (baseStyles) => ({
                  ...baseStyles,
                  width: 'auto'

                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  position: 'relative'
                })
              }}
              onMenuOpen={() => resetField('Subsecion')}
            />
          )}
        />
      </section>
      {errors.SecionMain?.type === 'required' &&
        <p className='error'>Por favor, seleccione la sección.</p>
      }

      {filterarrayOfSubseccion?.[0] && <section className={errors.SecionMain?.type === 'required' ? 'form_select on' : 'form_select'}>
        <label>Subseccion</label>
        <Controller
          name='Subsecion'
          control={control}
          rules={{
            validate: () => {
              return watch('Subsecion') != undefined
            }
          }}
          render={({ field }) => (
            <Select
              {...field}
              options={OptionSub}
              className='Input_select'
              styles={{
                indicatorsContainer: (baseStyles) => ({
                  ...baseStyles,
                  width: 'auto'

                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  position: 'relative'
                })
              }}
            />
          )}
        />
      </section>
      }
      {errors.Subsecion?.type === 'validate' &&
        <p className='error'>Por favor, seleccione la subseccion.</p>
      }
      {Ok ?
        <button className='protect-route-btn' type='submit'>Publicar</button>
        : <Loader />
      }
    </form>
  )
}

export default Createdarticles