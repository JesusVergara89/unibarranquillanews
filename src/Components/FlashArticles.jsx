import React from 'react'
import { useSelector } from 'react-redux'
import Article from './Article'
import Loading from './Loading'
import '../Styles/FlashArticles.css'

const FlashArticles = ({ access, referent }) => {
    const data = useSelector(state => state.articlesSlice)
    return (
        <article ref={referent} className="Flash-articles">
            {data ? (
                <div className="Recent-news-container">
                    {access ? <Article /> : <Loading />}
                    <h3>Nuestras secciones</h3>
                </div>
            ) : (
                <Loading />
            )}
        </article>
    )
}

export default FlashArticles