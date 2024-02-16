import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/ArticleForRead.css'
import { useSelector } from 'react-redux'

const ArticleForRead = () => {

    const articles = useSelector(state => state.articlesSlice)

    const { id } = useParams()

    // Buscar el artículo con el ID proporcionado
    const article = articles.find(article => article.id === id)

    if (!article) {
        return (
            <div className="Not-found">
                <h2>Artículo no encontrado</h2>
                <h2>o</h2>
                <h2>Vuelve a la página principal</h2>
            </div>

        )
    }

    useEffect(() => {
        scrollToTop()
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
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
            </div>
        </article>
    )
}

export default ArticleForRead
