import React, { useContext, useEffect, useState } from 'react'
import '../Styles/Singlearticle.css'
import { useParams } from 'react-router-dom'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import NotFound from './NotFound'
import Page_skeleton from './Loading-skeleton/Page_skeleton'
import Jesus from '../Images/Jesus.jpg'
import Gilberto from '../Images/Gilberto.jpg'
import Brian from '../Images/Brian.jpg'
import Alejandra from '../Images/Aleja.jpg'
import josemanuel from '../Images/josemanuel.jpg'
import omar from '../Images/omar.jpg'
import Compartir from './Compartir/Compartir'
import 'react-loading-skeleton/dist/skeleton.css'
import useRouter from '../Hooks/useRouter'
import SectionPage from './ScienceComponents/SectionPage'
import { Acesscontext } from './Context/Acesscontext'
import Editor from './Editor'

const Singlearticle = () => {

    const { name, id } = useParams()

    const { ArrayofRouter } = useRouter()
    const [Editar, setEditar] = useState(false)
    const { IsLogged, access, Admin } = useContext(Acesscontext)

    let validar = ArrayofRouter.find(data => data.Url === name)
    let Coleccion
    if (validar?.Subseccion) {
        Coleccion = validar.Subseccion.find(data => data.Url === id)
    }

    const [article, setArticle] = useState(null)
    useEffect(() => {
        setArticle(undefined)
        if (validar) {
            if (!validar.Subseccion) {
                const docRef = doc(validar.Database, "Articles", id)
                onSnapshot(docRef, (resp) => {
                    resp.exists() ?
                        setArticle({ ...resp.data(), id: resp.id })
                        : setArticle('failed')
                })
            }
        } else {
            setArticle('failed')
        }
    }, [name, id])

    const TimeReading = (text, wordsPerMinutes = 200) => {
        const words = text.trim().split(/\s+/).length;
        const timeToReadPerMinutes = words / wordsPerMinutes;
        const RoundedTimeRead = Math.ceil(timeToReadPerMinutes);
        return RoundedTimeRead;
    }

    const formatDescription = (description) => {
        const buttonRegex = /<button\s+(?:[^>]*?\s+)?onclick="window.location.href='([^']*)'"[^>]*>(.*?)<\/button>/gi;
        const regex = /(@\S+|#\S+|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g;

        let formattedDescription = description.replace(buttonRegex, '<button class="button-link" onclick="window.open(\'$1\', \'_blank\')">$2</button>');
        formattedDescription = formattedDescription.replace(regex, '<span style="font-weight: bold;">$1</span>');

        return formattedDescription;
    };


    function getLetters(input) {
        input = input.toLowerCase().trim();
        const keywords = {
            'jesus vergara': 'w',
            'alejandra leon': 'x',
            'brian escorcia': 'y',
            'gilberto gonzales': 'z',
            'jose diaz': 'p',
            'omar garcia': 'q'
        };
        for (const keyword in keywords) {
            const regex = new RegExp(keyword.split(' ').join('\\s{1,4}'));
            if (regex.test(input)) {
                return keywords[keyword];
            }
        }
        return null;
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

    const Condicional = () => {
        if (article === 'failed') {
            return (
                <NotFound />
            )
        } else if (article != 'failed' && article && !validar?.Subseccion && !Editar) {
            return (
                <article className="singles-article">
                    <div className="single-card">
                        <h1 className={validateTitleLength(article.title) ? "tocenter" : 'toleft'}>{article.title && capitTitle(article.title)}</h1>
                        <img className='Photo' src={article.imageUrl} alt="" />
                        <div className="single-out">
                            {article.autor ?
                                <img src={getLetters(article.autor) === 'w' ? Jesus :
                                    getLetters(article.autor) === 'x' ? Alejandra :
                                        getLetters(article.autor) === 'z' ? Gilberto :
                                            getLetters(article.autor) === 'y' ? Brian :
                                                getLetters(article.autor) === 'p' ? josemanuel : null} alt="" />
                                : ''}
                            <p>{article.autor}</p>
                            <p>{article.createdAt.toDate().toLocaleDateString('es-co', { day: "numeric", month: "short", year: "numeric" }).replace('de', ' ')}</p>

                            {IsLogged && ((article.autor === access?.Name) || Admin) ?
                                < i onClick={() => setEditar(true)} className='bx bx-edit'></i>
                                : ''
                            }
                            {
                                IsLogged && Admin ?
                                    <i className='bx bx-message-square-x'></i>
                                    : ''
                            }

                        </div>

                        <div className="single-description">
                            {article.description && article.description.split('\n').map((line, index) => (
                                <p key={index} dangerouslySetInnerHTML={{ __html: formatDescription(line) }} />
                            ))}
                            <h4>{`${TimeReading(article.description)} min. read`}</h4>
                        </div>
                        <div className='main-compartir'>
                            <a className='Fuente' href={article.link} target="_blank"> Ver mas</a>
                        </div>
                        <Compartir link={`${name}/${id} `} />
                    </div>
                </article >
            )
        } else if (!article && !validar?.Subseccion) {
            return (
                <Page_skeleton />
            )
        } else if (Coleccion) {
            return (
                <SectionPage user={Coleccion} coleccion={Coleccion.Coleccion} database={validar.Database} setEditar={setEditar} Editar={Editar} />
            )
        } else if (Editar) {
            return (
                <Editor data={article} autenti={validar} ID={id} setEditar={setEditar} />
            )
        }
        else {
            return (
                <NotFound />
            )
        }
    }
    return (
        <Condicional />
    )
}

export default Singlearticle