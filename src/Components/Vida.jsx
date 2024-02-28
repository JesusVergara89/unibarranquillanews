import React, { useEffect, useState } from 'react'
import { db7 } from '../firebaseconfig'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Cardnewyorktimes from './Cardnewyorktimes'

const Vida = ({access}) => {

  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/VIDAU'

  const dataTitle = 'VIDA ESTUDIANTIL'
  const dataDescription = 'Explora la experiencia estudiantil en Unibarranquilla. Desde consejos prácticos hasta perfiles de estudiantes destacados, te ofrecemos una visión completa de la vida en el campus.'
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
      const articleRef = collection(db7, "Articles")
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
                      <Cardnewyorktimes key={i} article={article} database={'db7'} access={access} currentURL={currentURL} />
                  ))
              }
          </div>
      </article>
  )
}

export default Vida