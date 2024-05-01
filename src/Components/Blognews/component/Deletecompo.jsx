import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { auth, db1, storage } from '../../../firebaseconfig'
import { toast } from 'react-toastify'
import { deleteObject, ref } from 'firebase/storage'
import { useAuthState } from 'react-firebase-hooks/auth'

const Deletecompo = ({user, id, imageUrl }) => {

    const [currentlyLoggedinUser] = useAuthState(auth)

    const handleDelete = async () => {
        if (window.confirm("You´re going to delete this.")) {
            try {
                await deleteDoc(doc(db1, "Articles", id))
                toast("Delete", { type: "success" })
                const storageRef = ref(storage, imageUrl)
                await deleteObject(storageRef)
            } catch (error) {
                toast("Error deliting", { type: "error" })
            }
        }
    }

    return (
        <button onClick={handleDelete} className="delete-card">
            {
                user === currentlyLoggedinUser.uid &&
                (
                    <i className='bx bx-trash-alt'></i>
                )
            }
        </button>
    )
}

export default Deletecompo