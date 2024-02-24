import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db1 } from '../../../firebaseconfig'

const Comments = ({id}) => {
    const [comments, setComments] = useState([])
    useEffect(()=>{
        const docRef = doc(db1, "Articles", id)
        onSnapshot(docRef, (snapshot)=>{
            setComments(snapshot.data().comments)
        })
    },[])
  return (
    <article className="comment-section">
        comments 
    </article>
  )
}

export default Comments