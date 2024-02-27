import React, { useEffect, useState } from 'react';
import { db4 } from '../firebaseconfig';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Cardnewyorktimes from './Cardnewyorktimes';

/**
 * Component displaying information about university sports.
 * Fetches sports data using the useSport hook.
 * @returns {JSX.Element} Component JSX
 */
const Deportes = ({ access }) => {

  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/DEPORTES';

  const dataTitle = 'DEPORTES'
  const dataDescription = 'Permanece actualizado sobre los logros y desempeños de nuestros equipos deportivos, tanto a nivel nacional como internacional. Mantente informado sobre eventos deportivos emocionantes, entrevistas con destacados atletas y análisis de campeonatos universitarios y de alto nivel. Sumérgete en el mundo del deporte donde la pasión y la excelencia se entrelazan en cada competición, desde lo local hasta lo global.'

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
    const articleRef = collection(db4, "Articles")
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
            <Cardnewyorktimes key={i} article={article} database={'db4'} access={access} currentURL={currentURL} />
          ))
        }
      </div>
    </article>
  );
};

export default Deportes;
