import React, { useEffect, useState } from 'react'
import '../Styles/Article.css'
import { collection, limit, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../firebaseconfig'
import { Link } from 'react-router-dom'
import Carrusel from './Carrusel'
import { SwiperSlide } from "swiper/react";
import Loading from './Loading'

const Article = ({ IsLogged }) => {

    const [articles, setArticles] = useState([{}])
    useEffect(() => {
        const articleRef = collection(db, "Articles")
        const q = query(articleRef, orderBy("createdAt", "desc"), limit(5))
        getDocs(q)
            .then((resp) => {
                setArticles(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
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
            pagination: {
                clickable: true
            }
        }
    }

    const TimeReading = (text, wordsPerMinutes = 200) => {
        const words = text.trim().split(/\s+/).length;
        const timeToReadPerMinutes = words / wordsPerMinutes;
        const RoundedTimeRead = Math.ceil(timeToReadPerMinutes);
        return RoundedTimeRead;
    }
    return (
        <div className='main-card-article'>
            {
                articles[0].description ? (
                    (<Carrusel breakpoints={breakpoints}>
                        {articles.map((article, i) => (
                            <SwiperSlide key={i}>
                                <Link to={IsLogged ? '' : `/ARTICLE/${article.id}`}>
                                    <div className="article-card">

                                        <img src={article.imageUrl} alt="Foto" className="card-image" />

                                        <h2 className="card-title">{article.title}</h2>
                                        <div className="card-description">
                                            {/* Split body content by newline and display */}
                                            <p>{article.description?.slice(0, 140) + " ..."}</p>
                                        </div>
                                        <h4>{article && article.description && `${TimeReading(article.description)} min. read`}</h4>
                                        <div className="card-content-information">
                                            <h2 className="card-date">{article.createdAt ? article.createdAt.toDate().toLocaleDateString('es-co', { day: "numeric", month: "short", year: "numeric" }).replace('de',' ') : ''}</h2>
                                        </div>

                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Carrusel>
                    )
                ) :
                    (<Loading />)
            }
        </div>
    )
}

export default Article