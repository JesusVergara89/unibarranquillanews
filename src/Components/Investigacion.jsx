import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Cardnewyorktimes from './Cardnewyorktimes';
import { db5 } from '../firebaseconfig';
/**
 * Experience component displays information about research and development projects.
 * It retrieves data using the useResearch hook and renders it in a structured format.
 * @returns {JSX.Element} Experience component
 */
const Investigacion = ({access}) => {

  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/INVESTIGACION';

  const dataTitle = 'INVESTIGACIÓN Y DESARROLLO'
  const dataDescription = 'Sumérgete en el vibrante tejido urbano donde convergen la vida estudiantil y la innovación académica. Explora los hallazgos más recientes y los proyectos pioneros desarrollados por nuestros destacados académicos y estudiantes. Adéntrate en las contribuciones que nuestra universidad ofrece al conocimiento y al progreso científico en el bullicioso entorno de la ciudad.'

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
    const articleRef = collection(db5, "Articles")
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
            <Cardnewyorktimes key={i} article={article} database={'db5'} access={access} currentURL={currentURL} />
          ))
        }
      </div>
    </article>
  );
}

export default Investigacion;
