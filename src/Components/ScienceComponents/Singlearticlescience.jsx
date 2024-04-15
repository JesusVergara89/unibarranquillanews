import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../Styles/Singlearticle.css'
import Page_skeleton from '../Loading-skeleton/Page_skeleton'
import { doc, onSnapshot } from 'firebase/firestore'
import Compartir from '../Compartir/Compartir'
import NotFound from '../NotFound'
import HTMLReactParser from 'html-react-parser'
import useRouter from '../../Hooks/useRouter'
import { Acesscontext } from '../Context/Acesscontext'
import Editor from '../Editor'
import Delete from '../Delete'

const Singlearticlescience = () => {

    const { name, id, idSub } = useParams()

    const [article, setArticle] = useState(null)

    const { ArrayofRouter } = useRouter()
    const { IsLogged, AccessInfor, Admin } = useContext(Acesscontext)
    const [Statedelete, setStatedelete] = useState(false)
    const [MenuUser, setMenuUser] = useState(false)
    const [Editar, setEditar] = useState(false)


    let validar = ArrayofRouter.find(data => data.Url === name)
    let Coleccion
    if (validar?.Subseccion) {
        Coleccion = validar.Subseccion.find(data => data.Url === id)
    }

    useEffect(() => {
        setArticle(undefined)
        if (validar && Coleccion) {
            const docRef = doc(validar.Database, id, idSub)
            onSnapshot(docRef, (resp) => {
                resp.exists() ?
                    setArticle({ ...resp.data(), id: resp.id })
                    : setArticle('failed')
            })
        } else {
            setArticle('failed')
        }
    }, [name, id, idSub])

    const TimeReading = (text, wordsPerMinutes = 200) => {
        const words = text.trim().split(/\s+/).length;
        const timeToReadPerMinutes = words / wordsPerMinutes;
        const RoundedTimeRead = Math.ceil(timeToReadPerMinutes);
        return RoundedTimeRead;
    }

    const capitTitle = (title) => {
        let words = title.split(" ");
        const wordsNoCapit = ["de", "al", "su", "nos", "da", "un", "unos", "unas", "asi", "es", "del", "la", "el", "los", "lo", "las", "y", "a", "en", "como", "con"];
        for (let i = 0; i < words.length; i++) {
            if (i === 0 || i === words.length - 1 || !wordsNoCapit.includes(words[i])) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
            } else {
                words[i] = words[i].toLowerCase();
            }
        }
        return words.join(" ");
    }

    const validateTitleLength = (title) => {
        return title.length <= 52;
    }

    return (
        <>
            {
                article === 'failed' ? <NotFound /> : article ?
                    Editar ? <Editor data={article} autenti={validar} ID={idSub} setEditar={setEditar} Subsecion={id} />
                        : <article className="singles-article">
                            <div className="single-card">
                                <h1 className={validateTitleLength(article.title) ? "tocenter" : 'toleft'}>{article.title && capitTitle(article.title)}</h1>
                                <img className='Photo' src={article.imageUrl} alt="" />
                                <div className="single-out">
                                    <div className='single-information'>
                                        <img src={article.avatar} alt="" />
                                        <p>{article.autor}</p>
                                        {IsLogged && ((article.autor.toLowerCase() === AccessInfor?.Name) || Admin) ?
                                            <>
                                                <i onClick={() => setMenuUser(true)} className='bx bx-dots-vertical-rounded'></i>
                                                <div className={MenuUser ? 'Menu_usuario on' : 'Menu_usuario off'}>
                                                    <div className='Option_user' onClick={() => { setEditar(true), setMenuUser(false) }}>
                                                        < i className='bx bx-edit' /> <p>Editar</p>
                                                    </div>
                                                    <div className='Option_user' onClick={() => { setStatedelete(true), setMenuUser(false) }} >
                                                        <i className='bx bx-message-square-x' /> <p>Eliminar </p>
                                                    </div>
                                                </div>
                                                <div className={MenuUser ? 'Close_user on' : 'Close_user off'} onClick={() => { setMenuUser(false) }} />

                                            </>
                                            : ''
                                        }

                                    </div>
                                    <p>{article.createdAt.toDate().toLocaleDateString('es-co', { day: "numeric", month: "short", year: "numeric" }).replace('de', ' ')}</p>
                                </div>

                                <div className="single-description">
                                    {HTMLReactParser(article.description)}
                                    <h4>{`${TimeReading(article.description)} min. read`}</h4>
                                </div>
                                <div className='main-compartir'>
                                    <a className='Fuente' href={article.link} target="_blank"> Ver mas</a>
                                </div>
                                <Compartir link={`${name}/${id}/${idSub} `} />
                            </div>
                            {IsLogged && ((article.autor.toLowerCase() === AccessInfor?.Name) || Admin) ? <Delete state={Statedelete} setState={setStatedelete} autenti={validar} ID={idSub} Subsecion={id} Url={article.imageUrl} /> : ''}
                        </article >
                    : <Page_skeleton />
            }
        </>
    )
}

export default Singlearticlescience