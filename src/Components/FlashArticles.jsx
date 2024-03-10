import React from 'react'
import Article from './Article'
import '../Styles/FlashArticles.css'
import { Link, useNavigate } from 'react-router-dom'

const FlashArticles = ({ IsLogged }) => {
    const navegar = useNavigate()
    return (
        <article className="Flash-articles">

            <div className="Recent-news-container">
                <div className='Vinculo'>
                    <Link className='enlace-flash' to={'/ARTICLE'}>Articulos flash</Link>
                    <i onClick={() => navegar('/ARTICLE')} className='bx bxs-plus-circle' ></i>
                </div>
                <Article IsLogged={IsLogged} />
            </div>

        </article>
    )
}

export default FlashArticles