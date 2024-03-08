import React from 'react'
import '../styles/Blogarticle.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebaseconfig'
import Deletecompo from './Deletecompo'
import Likecompo from './Likecompo'

const Cardblog = ({ article }) => {

    const [user] = useAuthState(auth)

    return (
        <div className="blog-card">
            <h3 className="blog card-title">{article.title}</h3>
            <img src={article.imageUrl} alt="" className="blog-card-img" />
            <div className="blog-card-description">{article.description}</div>
            <div className="blog-container1">
                <h3 className="blog-author">{`By ${article.createBy}`}</h3>
                <h3 className="blog-date">{article.createdAt.toDate().toDateString()}</h3>
            </div>
            <div className="blog-interactions">
                <Deletecompo user={article.comments.length > 0 ? article.comments[0].user : null} id={article.id} imageUrl={article.imageUrl} />
                <div className="blog-like">
                    {user && (<Likecompo id={article.id} likes={article.likes} />)}
                    <h5>{article.likes.length}</h5>
                </div>
            </div>
        </div>
    )
}

export default Cardblog