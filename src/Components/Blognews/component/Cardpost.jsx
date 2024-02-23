import React from 'react'
import '../styles/Cardpost.css'

const Cardpost = ({ article }) => {

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
          <div className="post-content-author">author</div>
       
        <div className="post-content-likes">
          <i className='bx bx-comment' ></i>
          <i className='bx bx-like'></i>
        </div>
      </div>
    </div>
  )
}

export default Cardpost