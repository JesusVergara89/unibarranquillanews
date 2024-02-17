import React, { useEffect, useState } from 'react'
import '../Styles/Article.css'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebaseconfig'
import Carrusel from './Carrusel'
import { SwiperSlide } from "swiper/react";

const Article = () => {
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
        890: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            speed: 500,
        },
    }
    return (
        <div className='main-card-article'>
            {
                articles.length === 0 ? (
                    <p>Not articles found</p>
                ) :
                    <Carrusel breakpoints={breakpoints}>
                        {
                            articles.map((article, i) =>
                                <SwiperSlide key={article.imageUrl}>
                                    <div className="article-card card">
                                        <img src={article.imageUrl} alt="Foto" className="card-image" />
                                        <div className="card-content">
                                            <h2 className="card-title">{article.title}</h2>
                                            <div className="card-description">
                                                {/* Split body content by newline and display */}
                                                {article.description && article.description.split('\n').map((line, index) => (
                                                    <p key={index}>{line}</p>
                                                ))}
                                            </div>
                                            <div className="card-content-information">
                                                <h2 className="card-date">{article.createdAt ? article.createdAt.toDate().toDateString() : ''}</h2>
                                                <button className="card-like"><i className='bx bx-like'></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Carrusel>

            }
        </div>
    )
}

export default Article