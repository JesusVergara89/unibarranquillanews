import React, { useEffect, useState } from 'react'
import '../Styles/CompanyCollaboratorAccess.css'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebaseconfig'

const Article = () => {
    const [articles, setArticles] = useState([{}])
    useEffect(() => {
        const articleRef = collection(db, "Articles")
        const q = query(articleRef, orderBy("createdAt", "desc"))
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
            }))
            setArticles(articles)
            console.log(articles)
        })
    }, [])
    return (
        <div className='main'>
            {
                articles.length === 0 ? (
                    <p>Not articles found</p>
                ) :
                    (
                        articles.map((article, i) => (
                            <div key={i} className="article-card card">
                                <img src={article.imageUrl} alt="Foto" className="card-image" />
                                <div className="card-content">
                                    <h2 className="card-title">{article.title}</h2>
                                    <p className="card-date">{article.createdAt ? article.createdAt.toDate().toDateString() : ''}</p>
                                    <button className="card-like">Like</button>
                                    <p className="card-description">{article.description}</p>
                                </div>
                            </div>
                        ))

                    )
            }
        </div>
    )
}

export default Article