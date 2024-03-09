import React, { useEffect, useState } from 'react';
import { db10, db2, db3, db4, db5, db6, db7, db8, db9, db } from '../firebaseconfig'
import Cardnewyorktimes from './Cardnewyorktimes';
import { collection, getDocs, orderBy, query, limit, startAfter, getCountFromServer } from 'firebase/firestore';
import Card_skeleton from './Loading-skeleton/Card_skeleton';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import NotFound from './NotFound';
import Botonera from './Botonera';

const Seccion = () => {
    const { name } = useParams()
    const arrayOfDataBase = [db, db2, db3, db4, db5, db6, db7, db8, db9, db10];
    const arrayGuia = ['FLASH', 'ACTUALIDAD', 'CULTURA', 'DEPORTES', 'INVESTIGACION', 'ASUNTOS', 'VIDAU', 'EVENTOS', 'ENTREVISTA', 'TECNOLOGIA']
    const functionReturn = () => {
        let dato
        arrayGuia.map((user, index) => {
            if (user === name) {
                dato = arrayOfDataBase[index]
            }
        })
        return dato
    }
    const ArrayDescrip = [
        {
            dataTitle: 'ACTUALIDAD',
            Url: 'ACTUALIDAD'
        },
        {
            dataTitle: 'CULTURA Y ARTE',
            Url: 'CULTURA'
        },
        {
            dataTitle: 'DEPORTES',
            Url: 'DEPORTES'
        },
        {
            dataTitle: 'INVESTIGACIÓN Y DESARROLLO',
            Url: 'INVESTIGACION'
        },
        {
            dataTitle: 'MI UNIVERISIDAD, MI CIUDAD',
            Url: 'ASUNTOS'
        },
        {
            dataTitle: 'VIDA ESTUDIANTIL',
            Url: 'VIDAU'
        },
        {
            dataTitle: 'EVENTOS',
            Url: 'EVENTOS'
        },
        {
            dataTitle: 'ENTREVISTAS Y PERFILES',
            Url: 'ENTREVISTA'
        },
        {
            dataTitle: 'TECNOLOGIA',
            Url: 'TECNOLOGIA'
        },
        {
            dataTitle: 'ARTICULOS FLASH',
            Url: 'FLASH'
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
    const [Lasdoc, setLasdoc] = useState()
    const [Firstdoc, setFirstdoc] = useState()
    const [Start, setStart] = useState({})
    const [Totalpages, setTotalpages] = useState()
    const [Orden, setOrden] = useState("desc")
    const [Reverse, setReverse] = useState(false)
    const [Page, setPage] = useState(1)

    useEffect(() => {
        setArticles(undefined)
        let validar = functionReturn()
        if (validar) {
            scrollToTop()
            const articleRef = collection(validar, "Articles")
            let q = query(articleRef, orderBy("createdAt", `${Orden}`), limit(10), startAfter(Start))
            getDocs(q)
                .then((resp) => {
                    let Result
                    if (Reverse) {
                        Result = resp.docs.reverse()
                    } else {
                        Result = resp.docs
                    }
                    setArticles(
                        Result.map((doc) => {
                            return { ...doc.data(), id: doc.id }
                        })
                    )
                    setLasdoc(Result[resp.docs.length - 1])
                    setFirstdoc(Result[0])
                })
        } else {
            setArticles('failed')
        }
    }, [name, Start])
    useEffect(() => {
        setArticles(undefined)
        setTotalpages(undefined)
        let validar = functionReturn()
        if (validar) {
            const articleRef = collection(validar, "Articles")
            getCountFromServer(articleRef)
                .then((resp) => {
                    setTotalpages(Math.ceil((resp.data().count) / 10))
                })
        } else {
            setArticles('failed')
        }
    }, [name])
    return (
        <>
            {articles === 'failed' ? <NotFound /> :
                <article className="engineering_section">
                    <h2 className="title-actualidad">{
                        Descripcion[0] ?
                            Descripcion[0].dataTitle
                            : <Skeleton width={'80vh'} height={40} style={{ marginTop: 60 }} />
                    }</h2>
                    {Totalpages ?
                        <Botonera
                            Totalpages={Totalpages}
                            setStart={setStart}
                            Lasdoc={Lasdoc}
                            Firstdoc={Firstdoc}
                            setOrden={setOrden}
                            setReverse={setReverse}
                            setPage={setPage}
                            Page={Page}
                        />
                        : <Skeleton width={'20%'} height={35} style={{ marginLeft: '35%' }} />
                    }
                    <div className="wrapp-section">
                        {articles ?
                            articles.map((article, i) => (
                                <Cardnewyorktimes key={i} database={name} article={article} />
                            ))
                            : <Card_skeleton />
                        }
                    </div>
                    {Totalpages ?
                        <Botonera
                            Totalpages={Totalpages}
                            setStart={setStart}
                            Lasdoc={Lasdoc}
                            Firstdoc={Firstdoc}
                            setOrden={setOrden}
                            setReverse={setReverse}
                            setPage={setPage}
                            Page={Page}
                        />
                        : <Skeleton width={'20%'} height={35} style={{ marginLeft: '35%' }} />
                    }
                </article>
            }
        </>
    )
}

export default Seccion