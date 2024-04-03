import React, { useContext, useEffect, useState } from 'react'
import '../Styles/Createdarticles.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import useRouter from '../Hooks/useRouter'
import { uploadBytesResumable } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import { Acesscontext } from './Context/Acesscontext'
// million-ignore
const Createdarticles = () => {
  const [Description, setDescription] = useState()
  const [focusDescrip, setfocusDescrip] = useState(false)
  const [Dropfile, setDropfile] = useState(false)
  const [InformImg, setInformImg] = useState()
  const { AccessInfor } = useContext(Acesscontext)
  const { control,
    register,
    handleSubmit,
    reset,
    resetField,
    clearErrors,
    formState: { errors },
    watch
  } = useForm();

  const submit = ({ title, link, photo, SecionMain, Subsecion, Description }) => {
    let collectionName = Subsecion || 'Articles'
    console.log(collectionName)
    if (SecionMain.value != 'ACTUALIDAD') {
      let email = window.localStorage.getItem('Email')
      let password = window.localStorage.getItem('Password')
      let autenti = ArrayofRouter.find(data => data.Url === SecionMain.value)
      signInWithEmailAndPassword(autenti.Auth, email, password)
        .then(() => {
          const storageRef = ref(autenti.Storage, `/images/${Date.now()}${photo[0].name}`);
          uploadBytesResumable(storageRef, photo[0])
            .then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                const articleRef = collection(autenti.Database, collectionName);
                addDoc(articleRef, {
                  title: title,
                  description: Description,
                  link: link,
                  autor: AccessInfor.Name,
                  imageUrl: url,
                  createdAt: Timestamp.now().toDate(),
                  avatar: AccessInfor.PhotoUrl
                })
                  .then(() => {
                    toast('Article added successfully', { type: 'success' });
                    reset()
                  })
                  .catch(() => {
                    toast('Error adding article', { type: 'error' });
                  });
              })
            })
        })
        .catch((error) => { toast(error.code, { type: "error" }) })
    }
  };

  let value = watch('photo')

  useEffect(() => {
    let e = value?.[0]
    if (e) {
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
  }, [value])

  const { ArrayofRouter } = useRouter()
  /*Filtro todas las subsecciones que coicida con el seccionmain */
  let filterarrayOfSubseccion = ArrayofRouter.filter(data => data.Url === watch('SecionMain')?.value && data.Subseccion)

  let OptionMain = []
  ArrayofRouter.map(data => {
    let option = { value: data.Url, label: data.Url }
    OptionMain.push(option)
  }
  )
  let OptionSub = []
  if (filterarrayOfSubseccion[0]) {
    filterarrayOfSubseccion[0].Subseccion.map(data => {
      let option = { value: data.Url, label: data.Url }
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

  return (
    <form onSubmit={handleSubmit(submit)} className='Form_create' >
      <section className={watch('title') ? 'form_input on' : 'form_input'}>
        <input autoComplete='off' type='text'{...register('title', { required: true })} className={errors.title?.type === 'required' ? 'input on' : 'input'} />
        <i className='bx bx-edit-alt'></i>
        <label>Titulo</label>
      </section>
      {errors.title?.type === 'required' &&
        <p className='error'>Por favor, ingrese el titulo.</p>
      }
      <section className={errors.Description?.type === 'required' || errors.Description?.type === 'validate' ? 'form_input editor on' : 'form_input editor'}>
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
      <section className={watch('link') ? 'form_input on' : 'form_input'}>
        <input autoComplete='off' type='text'{...register('link', { required: true, pattern: /^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/ })} className={errors.link?.type === 'required' || errors.link?.type === 'pattern' ? 'input on' : 'input'} />
        <i className='bx bx-link'></i>
        <label>Link</label>
      </section>
      {errors.link?.type === 'required' &&
        <p className='error'>Por favor, ingrese el link.</p>
      }
      {errors.link?.type === 'pattern' &&
        <p className='error'>Por favor, ingrese un link válido.</p>
      }
      <section className={errors.photo?.type === 'required' ? 'form_file on' : 'form_file'}>
        <label>Subir archivo</label>
        <div className={errors.photo?.type === 'required' ? 'file_imagen on' : 'file_imagen'}>
          <input autoComplete='off' type='file' accept='image/*' {...register('photo', { required: true })} className='input_file' />
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
      <button className='protect-route-btn' type='submit'>Publicar</button>
    </form>
  )
}

export default Createdarticles