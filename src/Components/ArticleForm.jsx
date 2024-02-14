import React, { useState } from 'react'
import '../Styles/ArticleForm.css'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from '../firebaseconfig'
import { toast } from 'react-toastify'

const ArticleForm = () => {

    const [progress, setProgress] = useState(0)

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        createdAt: Timestamp.now().toDate()
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] })
    }

    const handlePublish = () => {
        if (!formData.title || !formData.description || !formData.image) {
            alert('please fill all the fields')
            return;
        }
        const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`)
        const uploadImage = uploadBytesResumable(storageRef, formData.image)
        uploadImage.on("state_changed", (snapshot) => {
            const progressPercent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progressPercent)
        },
            (err) => {
                console.log(err)
            },
            () => {
                setFormData({
                    title: '',
                    description: '',
                    image: '',

                });
                getDownloadURL(uploadImage.snapshot.ref)
                    .then((url) => {
                        const articleRef = collection(db, "Articles")
                        addDoc(articleRef, {
                            title: formData.title,
                            description: formData.description,
                            imageUrl: url,
                            createdAt: Timestamp.now().toDate()
                        })
                            .then(() => {
                                toast("Articles added succesfully", { type: "success" })
                                setProgress(0)
                            })
                            .catch(() => {
                                toast("Error adding articles", { type: "error" })
                            })
                    })
            }
        )

    }

    return (
        <div className="form-articles">
            <h2 className="form-article-create">Create article</h2>
            {/* title */}
            <label htmlFor="">Title</label>
            <input type="text" name='title' className='form-article-input' value={formData.title}
                onChange={(e) => handleChange(e)}
            />
            {/* Description */}
            <label htmlFor="">Description</label>
            <textarea name="description" className='form-article-textarea' value={formData.description}
                onChange={(e) => handleChange(e)}
            />
            {/*Image */}
            <label htmlFor="">Image</label>
            <input type="file" name="image" accept='image/*' className='form-article-image'
                onChange={(e) => handleImageChange(e)}
            />

            {progress === 0 ? null : (
                <div className="form-article-progress">
                    <div className="form-article-progress-inside" style={{ width: `${progress}%` }}>
                        {`${progress}%`}
                    </div>
                </div>
            )}


            <button className="form-article-tbn" onClick={handlePublish}>Publish</button>
        </div>
    )
}

export default ArticleForm