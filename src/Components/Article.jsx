import React, { useEffect, useState } from 'react'
import '../Styles/Article.css'
import innerText from 'react-innertext';
import { collection, limit, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../firebaseconfig'
import { Link } from 'react-router-dom'
import Carrusel from './Carrusel'
import { SwiperSlide } from "swiper/react";
import Article_skeleto from './Loading-skeleton/Article_skeleto'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import HTMLReactParser from 'html-react-parser'

const Article = () => {

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
        const words = innerText(HTMLReactParser(text)).split(/\s+/).length;
        const timeToReadPerMinutes = words / wordsPerMinutes;
        const RoundedTimeRead = Math.ceil(timeToReadPerMinutes);
        return RoundedTimeRead;
    }
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        } else {
            return text;
        }
    }

    return (
        <div className='main-card-article'>
            {
                articles[0].description ? (
                    (<Carrusel breakpoints={breakpoints}>
                        {articles.map((article, i) => (
                            <SwiperSlide key={i}>
                                <Link to={`/ARTICLE/${article.id}`}>
                                    <div className="article-card">
                                        <LazyLoadImage className="card-image"
                                            src={article.imageUrl}
                                            alt="Foto"
                                            effect="blur"
                                            placeholderSrc={article.imageUrl}
                                        />
                                        <h2 className="card-title">{truncateText(article.title, 47)}</h2>
                                        <div className="card-description">
                                            {/* Split body content by newline and display */}
                                            {HTMLReactParser(truncateText(article.description, 120))}
                                        </div>
                                        <h4>{article && article.description && `${TimeReading(article.description)} min. read`}</h4>
                                        <div className="card-content-information">
                                            <h2 className="card-date">{article.createdAt ? article.createdAt.toDate().toLocaleDateString('es-co', { day: "numeric", month: "short", year: "numeric" }).replace('de', ' ') : ''}</h2>
                                        </div>

                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Carrusel>
                    )
                ) :
                    <Article_skeleto />
            }
        </div>
    )
}

export default Article