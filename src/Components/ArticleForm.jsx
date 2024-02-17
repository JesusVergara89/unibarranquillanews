import React, { useEffect, useState } from 'react';
import '../Styles/ArticleForm.css';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../firebaseconfig';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const ArticleForm = () => {

    const name = useSelector(state => state.emailSlice)
    const lastName = useSelector(state => state.passwordSlice)

    const [cleanForm, setCleanForm] = useState(false)
    const [progress, setProgress] = useState(0);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        link: '',
        autor: '',
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

        const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);
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
                    link: '',
                    autor: '',
                    image: '',
                });

                // Obtener la URL de descarga de la imagen
                getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                    // Agregar el artículo a la base de datos
                    const articleRef = collection(db, 'Articles');
                    addDoc(articleRef, {
                        title: formData.title,
                        description: formData.description,
                        link: formData.link,
                        autor: `${name} ${lastName}`,
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
        <div className="form-articles">
            <h2 className="form-article-create">CREATE ARTICLE</h2>
            {/* title */}
            <input placeholder="title" type="text" name="title" className="form-article-input" value={formData.title} onChange={(e) => handleChange(e)} />
            {/* Description */}
            <textarea placeholder="description" name="description" className="form-article-textarea" value={formData.description} onChange={(e) => handleChange(e)} />
            {/*External Link */}
            <input placeholder="link" name="link" className="form-article-link" value={formData.link} onChange={(e) => handleChange(e)} />
            {/*Image */}
            <input placeholder="image" type="file" name="image" accept="image/*" className="form-article-image" onChange={(e) => handleImageChange(e)} />

            {progress === 0 ? null : (
                <div className="form-article-progress">
                    <div className="form-article-progress-inside" style={{ width: `${progress}%` }}>
                        {`${progress}%`}
                    </div>
                </div>
            )}

            <button className="form-article-tbn" onClick={handlePublish}>
                Publish
            </button>
        </div>
    );
};

export default ArticleForm;
