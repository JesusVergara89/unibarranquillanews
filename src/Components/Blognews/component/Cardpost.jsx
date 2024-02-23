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
        <h3 className='post-content-title'>{article.title}</h3>
        <div className="post-content-description">{truncateText(article.description, 330)}</div>
        <div className="post-content-date-author">
          <div className="post-content-date">{article.createdAt.toDate().toDateString()}</div>
          <div className="post-content-author">author</div>
        </div>
      </div>
    </div>
  )
}

export default Cardpost