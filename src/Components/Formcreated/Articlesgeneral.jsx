import React, { useEffect, useState } from 'react'
import '../../Styles/Article.css'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import Carrusel from '../Carrusel';
import { SwiperSlide } from 'swiper/react';
import { db12 } from '../../firebaseconfig';
import HTMLReactParser from 'html-react-parser';

const Articlesgeneral = ({ IsLogged, database, arrayCollections }) => {
    
    const [articles, setArticles] = useState([{}])
    useEffect(() => {
        let collectionName = "Articles";
        if (database === db12) {
            collectionName = arrayCollections[0];
        }
        const articleRef = collection(database, collectionName)
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
        },
        1100: {
            slidesPerView: 3,
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
                                            <h2 className="card-title">{article.title?.slice(0, 45) + " ..."}</h2>
                                            <div className="card-description">
                                                {/* Split body content by newline and display */}
                                                { HTMLReactParser(article.description?.slice(0, 110) + " ...")}
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

export default Articlesgeneral