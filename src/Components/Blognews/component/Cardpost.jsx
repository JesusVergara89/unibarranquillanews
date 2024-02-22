import React from 'react'
import '../styles/Cardpost.css'

const Cardpost = ({article}) => {
    console.log(article, 'this is')
  return (
    <div className="post-content">
        <h3 className='post-content-title'>{article.title}</h3>
        <div className="post-content-description">{article.description}</div>
       <img src={article.imageUrl} alt="" className="post-content-img" />
       <div className="post-content-date-author">
        <div className="post-content-date">{article.createdAt.toDate().toDateString()}</div>
        <div className="post-content-author">author</div>
       </div>   
    </div>
  )
}

export default Cardpost