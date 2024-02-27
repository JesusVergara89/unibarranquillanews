import { useEffect, useState } from 'react';
import Cardnewyorktimes from './Cardnewyorktimes';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db9 } from '../firebaseconfig';

const Entrevista = ({ access }) => {

  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/ENTREVISTA';

  const dataTitle = 'ENTREVISTAS Y PERFILES'
  const dataDescription = 'Conoce a fondo a los líderes, académicos y personalidades que forman parte de nuestra ciudad, universidad y pais. Descubre sus historias, experiencias y contribuciones a la educación superior.'

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
    const articleRef = collection(db9, "Articles")
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
            <Cardnewyorktimes key={i} article={article} database={'db9'} access={access} currentURL={currentURL} />
          ))
        }
      </div>
    </article>
  );
};

export default Entrevista;
