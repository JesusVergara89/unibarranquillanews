import React from 'react'
import Article from './Article'
import '../Styles/FlashArticles.css'
import { Link } from 'react-router-dom'

const FlashArticles = ({IsLogged}) => {

    return (
        <article className="Flash-articles">
        
                <div className="Recent-news-container">
                    <Link className='enlace-flash' to={'/FLASH'}>Articulos flash</Link>
                    <Article IsLogged={IsLogged} />
                </div>
           
        </article>
    )
}

export default FlashArticles