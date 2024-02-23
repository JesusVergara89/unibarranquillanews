import React, { useEffect, useState } from 'react'
import '../styles/Formpost.css'
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { auth, db1, storage1 } from '../../../firebaseconfig';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';

const Formpost = ({outToFormPost}) => {

  const [user] = useAuthState(auth)

  const [cleanForm, setCleanForm] = useState(false)
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    createdAt: Timestamp.now().toDate()
  });

  useEffect(() => {
    console.log('form cleaned')
  }, [cleanForm])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image) {
      alert('please fill all the fields');
      return;
    }

    const storageRef = ref(storage1, `/images/${Date.now()}${formData.image.name}`);
    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      'state_changed',
      (snapshot) => {
        const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progressPercent);
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Limpiar el formulario después de que la imagen se haya cargado correctamente
        setFormData({
          title: '',
          description: '',
          image: '',
        });

        // Obtener la URL de descarga de la imagen
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          // Agregar el artículo a la base de datos
          const articleRef = collection(db1, 'Articles');
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate()
          })
            .then(() => {
              toast('Article added successfully', { type: 'success' });
              setProgress(0);
              setCleanForm(!cleanForm)
            })
            .catch(() => {
              toast('Error adding article', { type: 'error' });
            });
        });
      }
    );
  };

  return (
    <article className="Form-post-container">
      <button className="Form-post-save" onClick={()=>{signOut(auth); outToFormPost(); }}>Sing out</button>
      <h2 className='Form-post-container-user' >
        { user && (
           <h3> Welcome {user.displayName || user.email} </h3>
        )
        }
      </h2>
      <div className="Form-post">
        <h3 className="Form-post-title">Create post</h3>
        <input placeholder='title' type="text" name="title" className="Form-post-title" value={formData.title} onChange={(e) => handleChange(e)} />
        <textarea placeholder='description' name="description" className="Form-post-description" value={formData.description} onChange={(e) => handleChange(e)} />
        <input type="file" name="image" accept="image/*" className="Form-post-img" onChange={(e) => handleImageChange(e)} />
        {progress === 0 ? null : (
          <div className="Form-post-progress">
            <div className="Form-post-progress-bar" style={{ width: `${progress}%` }}>
              {`${progress}%`}
            </div>
          </div>
        )}
        <button className="Form-post-save" onClick={handlePublish}>Publish</button>
      </div>
    </article>
  )
}

export default Formpost