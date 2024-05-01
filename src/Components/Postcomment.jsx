import React from 'react'
import '../Styles/Postcomment.css'
import { useNavigate } from 'react-router';

const Postcomment = ({ article }) => {
    const navigate = useNavigate()
    function handleClick() {
        navigate('/BLOG');
    }
    return (
        <article className="Post-comment">

            <div onClick={handleClick}  className="upper-post">
                <div className="upper-up">
                    <img src={article.imageUrl} alt="" />
                    <div className="title-up">{article.title}</div>
                </div>
                <div className="upper-interact">
                    <div className="coli-up">
                        <i className='bx bxs-comment-dots'></i>
                        {article && article.comments && (
                            <h3>{article.comments.length}</h3>
                        )}
                    </div>
                    <div className="coli-up">
                        <i className='bx bxs-heart'></i>
                        {article && article.likes && (
                            <h3>{article.likes.length}</h3>
                        )}
                    </div>
                </div>
                <h4>{article.createBy}</h4>
            </div>

            <div className="lower-post">
                {
                    article.comments && 
                    (
                        article.comments.map((comment,i)=>(
                            <div key={i} className='lower-comment'>
                                <div className='lower-body'>
                                       {comment.comment}
                                </div>
                                <div className='lower-author'>
                                        {comment.userName}
                                </div>
                            </div>
                        ))
                    )
                }
            </div>

        </article>
    )
}

export default Postcomment