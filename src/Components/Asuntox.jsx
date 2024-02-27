import { useEffect, useState } from 'react';
import { db6 } from '../firebaseconfig';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Cardnewyorktimes from './Cardnewyorktimes';

const Asuntox = ({access}) => {

    const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/ASUNTOS';

    const dataTitle = 'MI UNIVERISIDAD, MI CIUDAD'
    const dataDescription = 'Aquí te sumergimos en la vida estudiantil y el dinamismo urbano que define nuestra comunidad. Desde eventos académicos hasta iniciativas comunitarias, descubre cómo nuestra universidad y la ciudad se entrelazan para enriquecer nuestra experiencia y dejar una marca positiva en nuestra comunidad.'

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
        const articleRef = collection(db6, "Articles")
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
                        <Cardnewyorktimes key={i} article={article} database={'db6'} access={access} currentURL={currentURL} />
                    ))
                }
            </div>
        </article>
    );
};

export default Asuntox;
