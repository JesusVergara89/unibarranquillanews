import { useEffect, useState } from 'react';
import { db2 } from '../firebaseconfig';
import Cardnewyorktimes from './Cardnewyorktimes';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const Actualidad = ({access}) => {

  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/ACTUALIDAD';
  const dataTitle = 'ACTUALIDAD'
  const dataDescription = 'Mantente al tanto de las últimas noticias, eventos y desarrollos en nuestra universidad y en el mundo. Desde anuncios importantes hasta logros destacados de nuestros estudiantes y profesores.'

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
      const articleRef = collection(db2, "Articles")
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
                        <Cardnewyorktimes key={i} database={'db2'} article={article} access={access} currentURL={currentURL} />
                    ))
                }
            </div>
    </article>
  );
};

export default Actualidad;
