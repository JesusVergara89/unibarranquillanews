import React from 'react'
import Article from './Article'
import '../Styles/FlashArticles.css'

const FlashArticles = ({IsLogged}) => {

    return (
        <article className="Flash-articles">
        
                <div className="Recent-news-container">
                    <h3>Articulos flash</h3>
                    <Article IsLogged={IsLogged} />
                </div>
           
        </article>
    )
}

export default FlashArticles