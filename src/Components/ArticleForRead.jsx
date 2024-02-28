import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import '../Styles/ArticleForRead.css'
import Loading from './Loading'
import { db } from '../firebaseconfig'

const ArticleForRead = () => {

    const currentURL = window.location.href;

    const [articles, setArticles] = useState([{}])
    const [article, setArticle] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const articleRef = collection(db, "Articles")
        const q = query(articleRef, orderBy("createdAt", "desc"))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setArticles(articles)
        })

        // Clean up function
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        scrollToTop()
    }, [])

    useEffect(() => {
        if (articles.length > 0) {
            const foundArticle = articles.find(article => article.id === id)
            setArticle(foundArticle)
        }
    }, [articles, id])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    const compartirEnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}&title=${encodeURIComponent(article.title)}&picture=${encodeURIComponent(article.imageUrl)}`, '_blank');
    };

    const compartirEnTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL)}&text=${encodeURIComponent(article.title)}&via=unibanewspaper`, '_blank');
    };

    const compartirEnLinkedIn = () => {
        window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(currentURL)}&title=${encodeURIComponent(article.title)}&summary=&source=`, '_blank');
    };


    const formatDescription = (description) => {
        const regex = /@(\w+)/g;
        return description.replace(regex, '<span style="font-weight: bold;">@$1</span>');
    }

    return (
        <div>
            {article ? (
                <article key={article.id} className="Complete-news">
                    <div className="Complete-news-container">
                        <div className="Complete-news-container-img">
                            <img src={article.imageUrl} alt="Foto" className="Complete-news-image" />
                        </div>
                        <div className="Complete-news-content">
                            <h2 className="Complete-news-title">{article.title}</h2>
                            <div className="Complete-news-description">
                                {article.description && article.description.split('\n').map((line, index) => (
                                    <p key={index} dangerouslySetInnerHTML={{ __html: formatDescription(line) }} />
                                ))}
                            </div>
                        </div>
                        <div className="Complete-news-information">
                            <h3 className="Complete-news-date">{article.createdAt ? article.createdAt.toDate().toDateString() : ''}</h3>
                            <h3>{article.autor ? `By ${article.autor}` : ''}</h3>
                        </div>
                        <div className="Complete-news-link">
                            <button className="Complet-news-link-btn"><a href={article.link} target="_blank" rel="noopener noreferrer">Link</a></button>
                        </div>
                        <div className="Complete-news-share-btns">
                            <button onClick={compartirEnFacebook}><i className='bx bxl-facebook'></i>
                            </button>
                            <button onClick={compartirEnTwitter}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" stroke="black" viewBox="0 0 50 50">
                                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                                </svg>
                            </button>
                            <button onClick={compartirEnLinkedIn}><i className='bx bxl-linkedin'></i>
                            </button>
                        </div>
                    </div>
                </article>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default ArticleForRead
