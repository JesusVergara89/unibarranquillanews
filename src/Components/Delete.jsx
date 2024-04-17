import React, { useState } from 'react'
import '../Styles/setting.css'
import '../Styles/form.css'
import Loader from './Loader'
import { deleteObject, ref } from 'firebase/storage'
import { deleteDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { dataDecryp } from './Crypto/Decryp'
import { signInWithEmailAndPassword } from 'firebase/auth'
const Delete = ({ state, setState, autenti, ID, Url,Subsecion }) => {
    const [Ok, setOk] = useState(true)
    const getRefimg = () => {
        const url = Url
        const Urlobject = decodeURIComponent(url)
        const regex = /images\/(.*?)\?/;
        const match = Urlobject.match(regex);
        return match[1]
    }
    const Deletedoc = async () => {
        setOk(false)
        try {
            const email = window.localStorage.getItem('Email');
            const password = window.localStorage.getItem('Password');
            await signInWithEmailAndPassword(autenti.Auth, dataDecryp(email), dataDecryp(password));
            let referente = getRefimg();
            const storageRef = ref(autenti.Storage, `/images/${referente}`);
            await deleteObject(storageRef);
            const collectionName = Subsecion || 'Articles';
            const Docref = doc(autenti.Database, collectionName, ID)
            await deleteDoc(Docref)
            toast('Noticia borrada con éxito', { type: 'success' });
            setState(true)
        } catch (error) {
            console.log(error);
            toast('Error al borrar la noticia', { type: "error" });
            setOk(true)
        }
    }
    return (
        <main className={state ? 'setting_main on' : 'setting_main off'}>
            <section className='setting_modal confirm'>
                <h3>¿Esta seguro en eliminar esta noticias?</h3>
                <div className='bottonera'>
                    {Ok ?
                        <>
                            <button className='cancel' onClick={() => setState(false)}>No</button>
                            <button className='save on' onClick={() => Deletedoc()}>Si</button>
                        </>
                        : <Loader />
                    }
                </div>
            </section>
            <div className='close' onClick={() => setState(false)} />
        </main>
    )
}

export default Delete