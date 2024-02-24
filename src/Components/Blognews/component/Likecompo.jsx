import React from 'react'
import '../styles/Cardpost.css'
import { auth, db1 } from '../../../firebaseconfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Likecompo = ({ id, likes }) => {
    const [user] = useAuthState(auth)
    const likesRef = doc(db1, "Articles", id)
    const handleLikes = () => {
        if (likes?.includes(user.uid)) {
            updateDoc(likesRef, {
                likes: arrayRemove(user.uid)
            })
                .then(() => {
                    console.log("unliked")
                })
                .catch((e) => {
                    console.log(e)
                })
        } else {
            updateDoc(likesRef, {
                likes: arrayUnion(user.uid)
            })
                .then(() => {
                    console.log("liked")
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }

    return (
        <div className="like-component">
            <i className={`fa fa-heart${!likes?.includes(user.uid) ? "-o" : " "} fa-lg `}
                style={{ cursor: "pointer", color: likes?.includes(user.uid) ? "red" : null }}
                onClick={handleLikes}
            />
            
        </div>
    )
}

export default Likecompo