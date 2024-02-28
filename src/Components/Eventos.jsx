import React, { useEffect, useState } from 'react'
import { db8 } from '../firebaseconfig'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Cardnewyorktimes from './Cardnewyorktimes'

/**
 * Functional component representing the Events and Activities section of the blog.
 * It showcases upcoming events, conferences, seminars, and social activities that enrich university life.
 */
const Eventos = ({access}) => {

  // Current URL of the page
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/EVENTOS'

  const dataTitle = 'EVENTOS'
  const dataDescription = 'Entérate de los eventos próximos, conferencias, seminarios y actividades sociales que enriquecen nuestra vida universitaria y de la ciudad. No te pierdas ninguna oportunidad de participar y ser parte activa de la comunidad.'

  useEffect(() => {
    scrollToTop()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const [articles, setArticles] = useState([{}])
  useEffect(() => {
    const articleRef = collection(db8, "Articles")
    const q = query(articleRef, orderBy("createdAt", "desc"))
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setArticles(articles)
    })
  }, [])
  return (
    <article className="engineering_section">
      <h2 className="title-actualidad">{dataTitle}</h2>
      <p className='description-actualidad'>
        {dataDescription}
      </p>

      <div className="wrapp-section">
        {
          articles?.map((article, i) => (
            <Cardnewyorktimes key={i} article={article} database={'db8'} access={access} currentURL={currentURL} />
          ))
        }
      </div>
    </article>
  )
}

export default Eventos
