import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import Article from './Article'
import Loading from './Loading'
import '../Styles/FlashArticles.css'
import { Accescontext } from './Context/AccesContext'

const FlashArticles = () => {
    const{access}=useContext(Accescontext)

    return (
        <article className="Flash-articles">
            {access ? (
                <div className="Recent-news-container">
                    <h3>Articulos flash</h3>
                    <Article />
                    <h3>Nuestras secciones</h3>
                </div>
            ) : (
                <Loading />
            )}
        </article>
    )
}

export default FlashArticles