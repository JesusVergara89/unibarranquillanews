import React, { useEffect, useState } from 'react'
import { db3 } from '../firebaseconfig'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Cardnewyorktimes from './Cardnewyorktimes'

const Culture = ({ access }) => {

  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/CULTURA'

  const dataTitle = 'CULTURA Y ARTE'
  const dataDescription = 'Explora la escena cultural y artística en Unibarranquilla. Reseñas de eventos, entrevistas con artistas locales y destacados, así como la cobertura de actividades culturales organizadas por la universidad.'

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
    const articleRef = collection(db3, "Articles")
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
            <Cardnewyorktimes key={i} article={article} database={'db3'} access={access} currentURL={currentURL} />
          ))
        }
      </div>
    </article>
  )
}

export default Culture