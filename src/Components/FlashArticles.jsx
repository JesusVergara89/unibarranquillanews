import React from 'react'
import { useSelector } from 'react-redux'
import Article from './Article'
import Loading from './Loading'
import '../Styles/FlashArticles.css'

const FlashArticles = ({IsLogged}) => {

    return (
        <article className="Flash-articles">
        
                <div className="Recent-news-container">
                    <h3>Articulos flash</h3>
                    <Article IsLogged={IsLogged} />
                    <h3>Nuestras secciones</h3>
                </div>
           
        </article>
    )
}

export default FlashArticles