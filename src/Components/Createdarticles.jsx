import React, { useContext, useEffect, useState } from 'react'
import '../Styles/form.css'
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
import imageCompression from 'browser-image-compression';
// million-ignore
const Createdarticles = () => {
  const [focusDescrip, setfocusDescrip] = useState(false)
  const [InformImg, setInformImg] = useState()
  const { AccessInfor } = useContext(Acesscontext)
  const [ErrorPhoto, setErrorPhoto] = useState(false)
  const [Ok, setOk] = useState(true)
  const { control,
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
    watch
  } = useForm()
  const options = {
    maxSizeMB: 5,
    maxWidthOrHeight: 500,
    useWebWorker: true,
  }
  const submit = async ({ title, link, photo, SecionMain, Subsecion, Description }) => {
    try {
      setOk(false);
      const collectionName = Subsecion?.value || 'Articles';
      const email = window.localStorage.getItem('Email');
      const password = window.localStorage.getItem('Password');
      const autenti = ArrayofRouter.find(data => data.Url === SecionMain.value);
      await signInWithEmailAndPassword(autenti.Auth, dataDecryp(email), dataDecryp(password));
      const storageRef = ref(autenti.Storage, `/images/${Date.now()}${photo[0].name}`);
      const compressedFile = await imageCompression(photo[0], options);
      const snapshot = await uploadBytesResumable(storageRef, compressedFile);
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
      reset({ title: '', link: '', SecionMain: '', Subsecion: '', photo: null});
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
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'tif', 'webp', 'svg', 'raw', 'avi'];
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
    <form onSubmit={handleSubmit(submit)} className='form_main create' >
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
        <input autoComplete='off' type='text'{...register('link', { required: true, pattern: /^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/ })} className={errors.link?.type === 'required' || errors.link?.type === 'pattern' ? 'input_user on' : 'input_user'} />
        <i className='bx bx-link'></i>
        <label>Link</label>
      </section>
      {errors.link?.type === 'required' &&
        <p className='error'>Por favor, ingrese el link.</p>
      }
      {errors.link?.type === 'pattern' &&
        <p className='error'>Por favor, ingrese un link válido.</p>
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
      {Ok ?
        <button className='protect-route-btn' type='submit'>Publicar</button>
        : <Loader />
      }
    </form>
  )
}

export default Createdarticles