import React, { useEffect, useState } from 'react'
import '../Styles/Article.css'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebaseconfig'
import { Link } from 'react-router-dom'
import Carrusel from './Carrusel'
import { SwiperSlide } from "swiper/react";

const Article = ({ IsLogged }) => {

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

    let breakpoints = {
        700: {
            slidesPerView: 2,
            pagination: {
                clickable: false
            }
        },
        1100: {
            slidesPerView: 3,
            speed: 640,
        }
    }

    return (
        <div className='main-card-article'>
            {
                articles.length === 0 ? (
                    <p>Not articles found</p>
                ) :
                    (<Carrusel breakpoints={breakpoints}>
                        {articles.map((article, i) => (
                            <SwiperSlide key={i}>
                                <Link to={IsLogged ? '' : `/ARTICLE/${article.id}`}>
                                    <div className="article-card">

                                        <img src={article.imageUrl} alt="Foto" className="card-image" />

                                        <div className="card-content">
                                            <h2 className="card-title">{article.title}</h2>
                                            <div className="card-description">
                                                {/* Split body content by newline and display */}
                                                <p>{article.description?.slice(0, 110) + " ..."}</p>
                                            </div>
                                            <div className="card-content-information">
                                                <h2 className="card-date">{article.createdAt ? article.createdAt.toDate().toDateString() : ''}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Carrusel>

                    )
            }
        </div>
    )
}

export default Article