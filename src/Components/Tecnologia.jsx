import React, { useEffect, useState } from 'react'
import { db10 } from '../firebaseconfig';
import Cardnewyorktimes from './Cardnewyorktimes';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const Tecnologia = ({access}) => {

    const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/TECNOLOGIA'

    const dataTitle = 'TECNOLOGIA'
    const dataDescription = '¡Bienvenido a la sección de Tecnología! Aquí, te mantenemos al día con las últimas novedades en gadgets, innovaciones y avances tecnológicos. Desde smartphones hasta inteligencia artificial, exploramos cómo la tecnología está moldeando nuestro futuro.'

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
        const articleRef = collection(db10, "Articles")
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
                        <Cardnewyorktimes key={i} article={article} database={'db10'} access={access} currentURL={currentURL} />
                    ))
                }
            </div>
        </article>
    );
};

export default Tecnologia