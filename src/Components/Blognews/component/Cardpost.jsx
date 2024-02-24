import React from 'react'
import '../styles/Cardpost.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebaseconfig'
import Likecompo from './Likecompo'
import Deletecompo from './Deletecompo'

const Cardpost = ({ article }) => {

  const [user] = useAuthState(auth)

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }
  return (
    <div className="post-content">
      <div className="post-content-div-1">
        <img src={article.imageUrl} alt="" className="post-content-img" />
      </div>
      <div className="post-content-div-2">
        <h3 className='post-content-title'>{truncateText(article.title, 35)}</h3>
        <div className="post-content-description">{truncateText(article.description, 350)}</div>

        <div className="post-content-date">{article.createdAt.toDate().toDateString()}</div>
        {article.createBy &&
          (<div className="post-content-author">
            <h3>{`By ${article.createBy}`}</h3>
          </div>
          )
        }

        <div className="post-interact">
          <Deletecompo id={article.id} imageUrl={article.imageUrl} />

          {
            user && (<Likecompo id={article.id} likes={article.likes} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Cardpost