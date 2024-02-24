import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { auth, db1 } from '../../../firebaseconfig'
import '../styles/Blogarticle.css'
import Likecompo from './Likecompo'
import Deletecompo from './Deletecompo'
import { useAuthState } from 'react-firebase-hooks/auth'
import Comments from './Comments'

const Blogarticle = () => {

    const { id } = useParams()
    const [article, setArticle] = useState(null)
    const [user] = useAuthState(auth)

    useEffect(() => {
        const docRef = doc(db1, "Articles", id)
        onSnapshot(docRef, (snapshot) => {
            setArticle({ ...snapshot.data(), id: snapshot.id })
        })
    }, [])

    return (
        <article className="blog-article">
            <div className="blog-article-upper-section">
                {article &&
                    (
                        <div className="blog-card">
                            <h3 className="blog card-title">{article.title}</h3>
                            <img src={article.imageUrl} alt="" className="blog-card-img" />
                            <div className="blog-card-description">{article.description}</div>
                            <div className="blog-container1">
                                <h3 className="blog-author">{`By ${article.createBy}`}</h3>
                                <h3 className="blog-date">{article.createdAt.toDate().toDateString()}</h3>
                            </div>
                            <div className="blog-interactions">
                                <Deletecompo user={article.comments[0].user}  id={article.id} imageUrl={article.imageUrl} />
                                <div className="blog-like">
                                    {user && (<Likecompo id={article.id} likes={article.likes} />)}
                                    <h5>{article.likes.length}</h5>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="blog-article-lower-section">
                {article &&
                    (
                        <Comments id={article.id} />
                    )
                }
            </div>
        </article>
    )
}

export default Blogarticle