import React, { useEffect, useState } from 'react'
import '../Styles/Theblog.css'
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import { db1 } from '../firebaseconfig'
import Postcomment from './Postcomment'
import { useNavigate } from 'react-router'

const Theblog = () => {

    const [articles, setArticles] = useState([{}])

    const navigate = useNavigate()

    useEffect(() => {
        const articleRef = collection(db1, "Articles")
        const q = query(articleRef, orderBy("createdAt", "desc"))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setArticles(articles)
        })

        // Clean up function
        return () => unsubscribe()
    }, [])

    function handleClick() {
        navigate('/BLOG');
    }

    return (
        <article className="Container-blog">

            <button onClick={handleClick} className="to-the-blog">
                Blog
            </button>

          {
            articles && 
            (
                articles.map((article, i)=>(
                    <Postcomment key={i} article={article}/>
                ))
            )
          }

        </article>
    )
}

export default Theblog