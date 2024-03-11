import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db1 } from '../../../firebaseconfig'
import '../styles/Blogarticle.css'
import Comments from './Comments'
import Cardblog from './Cardblog'

const Blogarticle = () => {

    const { id } = useParams()
    const [article, setArticle] = useState(null)

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
                        <Cardblog article={article} />
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