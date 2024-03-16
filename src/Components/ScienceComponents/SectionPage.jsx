import React, { useEffect, useState } from 'react'
import './SectionPage.css'
import { collection, getCountFromServer, getDocs, limit, orderBy, query, startAfter } from 'firebase/firestore'
import { db12 } from '../../firebaseconfig'
import Skeleton from 'react-loading-skeleton'
import Card_skeleton from '../Loading-skeleton/Card_skeleton'
import Botonera from '../Botonera'
import Cardnewyorkscience from './Cardnewyorkscience'

const SectionPage = ({arrayCollections}) => {

    const [articles, setArticles] = useState([])
    const [Lasdoc, setLasdoc] = useState()
    const [Firstdoc, setFirstdoc] = useState()
    const [Start, setStart] = useState({})
    const [Totalpages, setTotalpages] = useState()
    const [Orden, setOrden] = useState("desc")
    const [Reverse, setReverse] = useState(false)
    const [Page, setPage] = useState(1)

    useEffect(() => {
        const articleRef = collection(db12, arrayCollections[0])
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
    }, [name, Start])
    useEffect(() => {
        setTotalpages(undefined)
        const articleRef = collection(db12, arrayCollections[0])
        getCountFromServer(articleRef)
            .then((resp) => {
                setTotalpages(Math.ceil((resp.data().count) / 10))
            })
    }, [name])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [Start])
    return (
        <>
            {articles === 'failed' ? <NotFound /> :
                <article className="engineering_section">
                    <h2 className="title-actualidad">
                        {arrayCollections[0] ?
                            arrayCollections[0].toLowerCase()
                            : ''
                        }
                    </h2>
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
                        : <Skeleton width={'40%'} height={50} style={{ marginLeft: '30%' }} />
                    }
                    <div className="wrapp-section">
                        {articles ?
                            articles.map((article, i) => (
                                <Cardnewyorkscience key={i} idcollection={arrayCollections[0]} article={article} />
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

export default SectionPage