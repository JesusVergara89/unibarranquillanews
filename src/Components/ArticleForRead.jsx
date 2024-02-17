import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import '../Styles/ArticleForRead.css'
import Loading from './Loading'
import { db } from '../firebaseconfig'

const ArticleForRead = () => {
    const [articles, setArticles] = useState([{}])
    const [article, setArticle] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const articleRef = collection(db, "Articles")
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

    useEffect(() => {
        scrollToTop()
    }, [])

    useEffect(() => {
        if (articles.length > 0) {
            const foundArticle = articles.find(article => article.id === id)
            setArticle(foundArticle)
        }
    }, [articles, id])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
        <div>
            {article ? (
                <article key={article.id} className="Complete-news">
                    <div className="Complete-news-container">
                        <div className="Complete-news-container-img">
                            <img src={article.imageUrl} alt="Foto" className="Complete-news-image" />
                        </div>
                        <div className="Complete-news-content">
                            <h2 className="Complete-news-title">{article.title}</h2>
                            <div className="Complete-news-description">
                                {/* Split body content by newline and display */}
                                {article.description && article.description.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                        </div>
                        <div className="Complete-news-information">
                            <h3 className="Complete-news-date">{article.createdAt ? article.createdAt.toDate().toDateString() : ''}</h3>
                            <h3>{article.autor ? `By ${article.autor}` : ''}</h3>
                        </div>
                        <div className="Complete-news-link">
                            <button className="Complet-news-link-btn"><a href={article.link} target="_blank" rel="noopener noreferrer">Link</a></button>
                        </div>
                    </div>
                </article>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default ArticleForRead
