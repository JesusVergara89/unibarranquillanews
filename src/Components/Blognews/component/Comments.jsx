import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db1 } from '../../../firebaseconfig'
import '../styles/Comments.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { v4 as uuidv4 } from 'uuid'

const Comments = ({ id }) => {

  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [currentlyLoggedinUser] = useAuthState(auth)
  const commentRef = doc(db1, "Articles", id)

  useEffect(() => {
    const docRef = doc(db1, "Articles", id)
    onSnapshot(docRef, (snapshot) => {
      setComments(snapshot.data().comments)
    })
  }, [])

  const handleChangeComment = (e) => {
    if (e.key === "Enter") {
      updateDoc(commentRef, {
        comments: arrayUnion({
          user: currentlyLoggedinUser.uid,
          userName: currentlyLoggedinUser.displayName,
          comment: comment,
          createdAt: new Date(),
          commentId: uuidv4()
        })
      })
        .then(
          () => {
            setComment('')
          })
    }
  }

  const handledeletecoment = (comment) => {
    updateDoc(commentRef, {
      comments: arrayRemove(comment)
    })
      .then((e) => { console.log(e) })
      .catch((e) => { console.log(e) })
  }

  return (
    <article className="comment-section">
      <div className="Comments-make">
        {
          currentlyLoggedinUser &&
          (
            <textarea
              placeholder='Presiona enter para comentar'
              type='text'
              className='create-comment'
              value={comment}
              onChange={(e) => { setComment(e.target.value) }}
              onKeyUp={(e) => { handleChangeComment(e) }}
            />
          )
        }
      </div>

      <div className="Comments-div">
        {comments !== null &&
          comments.map(
            ({ commentId, user, comment, userName, createdAt }) => (
              <div key={commentId} className="comment-card">
                <div className="display-comment">
                  {comment}
                </div>
                <div className="comment-user-information">
                  <div className={`comment-user ${user === currentlyLoggedinUser.uid ? "green" : "red"}`}>{userName}</div>
                  <div className="comment-date">{createdAt.toDate().toDateString()}</div>
                </div>
                <div className="delete-btn">
                  {
                    user === currentlyLoggedinUser.uid &&
                    (
                      <i className="fa fa-times"
                        style={{ cursor: "pointer" }}
                        onClick={() => handledeletecoment({ commentId, user, comment, userName, createdAt })}
                      ></i>
                    )
                  }
                </div>
              </div>
            )
          )

        }
      </div>
    </article>
  )
}

export default Comments