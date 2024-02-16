import React, { useEffect, useState } from 'react'
import '../Styles/Article.css'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebaseconfig'
import { Link } from 'react-router-dom'

const Article = ({IsLogged}) => {
    const [articles, setArticles] = useState([{}])
    useEffect(() => {
        const articleRef = collection(db, "Articles")
        const q = query(articleRef, orderBy("createdAt", "desc"))
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setArticles(articles)
        })
    }, [])
    console.log(IsLogged)
    return (
        <div className='main-card-article'>
            {
                articles.length === 0 ? (
                    <p>Not articles found</p>
                ) :
                    (
                        articles.map(({ id, imageUrl, title, description, autor, createdAt }) => (
                            <div key={imageUrl} className="article-card card">
                                <Link to={IsLogged ? '' : `/ARTICLE/${id}`}>
                                    <img src={imageUrl} alt="Foto" className="card-image" />
                                </Link>
                                <div className="card-content">
                                    <h2 className="card-title">{title}</h2>
                                    <div className="card-description">
                                        {/* Split body content by newline and display */}
                                        {description && description.split('\n').map((line, index) => (
                                            <p key={index}>{line}</p>
                                        ))}
                                    </div>
                                    <div className="card-content-information">
                                        <h2 className="card-date">{createdAt ? createdAt.toDate().toDateString() : ''}</h2>
                                    </div>
                                </div>
                            </div>
                        ))

                    )
            }
        </div>
    )
}

export default Article