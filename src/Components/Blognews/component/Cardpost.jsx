import React from 'react'
import '../styles/Cardpost.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebaseconfig'
import Likecompo from './Likecompo'
import Deletecompo from './Deletecompo'
import { Link } from 'react-router-dom'

const Cardpost = ({ article }) => {

  const [user] = useAuthState(auth)

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }

  console.log(user)
  
  return (
    article && (
      <div className="post-content">
        <div className="post-content-div-1">
          <Link to={`/BLOGARTICLE/${article.id}`}>
            <img src={article.imageUrl} alt="" className="post-content-img" />
          </Link>
        </div>
        <div className="post-content-div-2">
          <h3 className='post-content-title'>{truncateText(article.title, 30)}</h3>
          <div className="post-content-description">{truncateText(article.description, 350)}</div>

          <div className="post-content-date">{article.createdAt.toDate().toDateString()}</div>
          {article.createBy &&
            <div className="post-content-author">
              <h3>{`By ${article.createBy}`}</h3>
            </div>
          }

          <div className="post-interact">

            <div className="post-interact-div">
            <Deletecompo user={article.comments.length > 0 ? article.comments[0].user : null} id={article.id} imageUrl={article.imageUrl} />
            </div>

            <div className="post-interact-div">
              <i className='bx bx-message-dots' ></i>
              <div>{article.comments.length}</div>
            </div>

            <div className="post-interact-div">
              {user && <Likecompo id={article.id} likes={article.likes} />}
              <div>{article.likes.length}</div>
            </div>

          </div>
        </div>
      </div>
    )
  )
}

export default Cardpost