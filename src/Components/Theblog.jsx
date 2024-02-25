import React, { useEffect, useState } from 'react'
import '../Styles/Theblog.css'
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import { db1 } from '../firebaseconfig'

const Theblog = () => {

    const [articles, setArticles] = useState([{}])

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

    console.log(articles)

    return (
        <article className="Container-blog">



        </article>
    )
}

export default Theblog