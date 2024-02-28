import React, { useEffect, useState } from 'react';
import { db10, db2, db3, db4, db5, db6, db7, db8, db9 } from '../firebaseconfig'
import Cardnewyorktimes from './Cardnewyorktimes';
import { collection, onSnapshot, orderBy, query, limit } from 'firebase/firestore';
import Card_skeleton from './Loading-skeleton/Card_skeleton';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Seccion = ({ access }) => {
    const { name } = useParams()
    const arrayOfDataBase = [db2, db3, db4, db5, db6, db7, db8, db9, db10];
    const arrayGuia = ['ACTUALIDAD', 'CULTURA', 'DEPORTES', 'INVESTIGACION', 'ASUNTOS', 'VIDAU', 'EVENTOS', 'ENTREVISTA', 'TECNOLOGIA']
    const functionReturn = () => {
        let dato
        arrayGuia.map((user, index) => {
            if (user === name) {
                dato = arrayOfDataBase[index]
            }
        })
        return dato
    }
    const ArrayDescrip = [{
        dataTitle: 'ACTUALIDAD',
        Url: 'ACTUALIDAD',
        dataDescription: 'Mantente al tanto de las últimas noticias, eventos y desarrollos en nuestra universidad y en el mundo. Desde anuncios importantes hasta logros destacados de nuestros estudiantes y profesores.'
    },
    {
        dataTitle: 'CULTURA Y ARTE',
        Url: 'CULTURA',
        dataDescription: 'Explora la escena cultural y artística en Unibarranquilla. Reseñas de eventos, entrevistas con artistas locales y destacados, así como la cobertura de actividades culturales organizadas por la universidad.'
    },
    {
        
    }
    ]
    const Descripcion = ArrayDescrip.filter((index) => index.Url === name)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const [articles, setArticles] = useState()
    useEffect(() => {
        scrollToTop()
        const articleRef = collection(functionReturn(), "Articles")
        const q = query(articleRef, orderBy("createdAt", "desc"), limit(10))
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setArticles(articles)
        })
    }, [name])
    return (
        <>
            {false ?
                <article className="engineering_section">
                    <h2 className="title-actualidad">{Descripcion[0].dataTitle}</h2>
                    <p className='description-actualidad'>{Descripcion[0].dataDescription}</p>
                    <div className="wrapp-section">
                        {articles?.map((article, i) => (
                            <Cardnewyorktimes key={i} database={'db2'} article={article} access={access} />
                        ))}

                    </div>
                </article>
                :
                <article className="engineering_section">
                    <h2 className="title-actualidad">
                        <Skeleton width={'80vh'} height={40} style={{ marginTop: 60 }} />
                    </h2>
                    <p className='description-actualidad'>
                        <Skeleton height={100} />
                    </p>
                    <div className="wrapp-section">
                        <Card_skeleton />
                    </div>
                </article>
            }
        </>
    )
}

export default Seccion