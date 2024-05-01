import React, { useEffect, useState } from 'react'
import Cardpost from './Cardpost'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db1 } from '../../../firebaseconfig'
import '../styles/Post.css'


const Post = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const articleRef = collection(db1, "Articles")
        const q = query(articleRef, orderBy("createdAt", "desc"))
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setArticles(articles)
        })
    }, [])

    return (
        <article className="post-article">
            {
                articles.length === 0 ? (
                    <h1>Not articles yet</h1>
                )
                    :
                    (
                        articles.map((article, i) => {
                           return <Cardpost article={article} key={i} />
                        })
                    )
            }
        </article>
    )
}

export default Post