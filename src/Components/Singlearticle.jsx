import React, { useContext, useEffect, useState } from 'react'
import '../Styles/Singlearticle.css'
import { useParams } from 'react-router-dom'
import { db10, db2, db3, db4, db5, db6, db7, db8, db9, db } from '../firebaseconfig'
import { doc, getDoc } from 'firebase/firestore'
import NotFound from './NotFound'
import Page_skeleton from './Loading-skeleton/Page_skeleton'
import Jesus from '../Images/Jesus.jpg'
import Gilberto from '../Images/Gilberto.jpg'
import Brian from '../Images/Brian.jpg'
import Alejandra from '../Images/Aleja.jpg'
import Compartir from './Compartir/Compartir'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Singlearticle = () => {

    const { name, id } = useParams()

    const arrayOfDataBase = [db, db2, db3, db4, db5, db6, db7, db8, db9, db10];
    const arrayGuia = ['ARTICLE', 'ACTUALIDAD', 'CULTURA', 'DEPORTES', 'INVESTIGACION', 'ASUNTOS', 'VIDAU', 'EVENTOS', 'ENTREVISTA', 'TECNOLOGIA']
    const functionReturn = () => {
        let dato
        arrayGuia.map((user, index) => {
            if (user === name) {
                dato = arrayOfDataBase[index]
            }
        })
        return dato
    }

    const [article, setArticle] = useState(null)

    useEffect(() => {
        setArticle(undefined)
        let validar = functionReturn()
        if (validar) {
            const docRef = doc(validar, "Articles", id)
            getDoc(docRef)
                .then((resp) => {
                    resp.exists() ?
                        setArticle({ ...resp.data(), id: resp.id })
                        : setArticle('failed')
                })
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
            'gilberto gonzales': 'z'
        };
        for (const keyword in keywords) {
            const regex = new RegExp(keyword.split(' ').join('\\s{1,4}'));
            if (regex.test(input)) {
                return keywords[keyword];
            }
        }
        return null;
    }

    const capitTitle = (title) =>  {
        let words = title.split(" ");
        const wordsNoCapit = ["de", "del", "la", "el", "los", "las", "y", "a", "en", "como", "con"];
        for (let i = 0; i < words.length; i++) {
            if (i === 0 || i === words.length - 1 || !wordsNoCapit.includes(words[i])) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
            } else {
                words[i] = words[i].toLowerCase();
            }
        }
        return words.join(" ");
    }
    
    return (
        <>
            {article === 'failed' ? <NotFound /> : article ?
                <article className="singles-article">
                    <div className="single-card">
                        <h1>{article.title && capitTitle(article.title)}</h1>
                        <img className='Photo' src={article.imageUrl} alt="" />
                        <div className="single-out">
                            <div className="img-autor">
                                {article.autor ?
                                    <img src={getLetters(article.autor) === 'w' ? Jesus :
                                        getLetters(article.autor) === 'x' ? Alejandra :
                                            getLetters(article.autor) === 'z' ? Gilberto :
                                                getLetters(article.autor) === 'y' ? Brian : null} alt="" />
                                    : <Skeleton circle={true} height={50} width={50} style={{ marginLeft: '33%' }} />}
                                <h2>{article.autor}</h2>
                                <h3>{article.createdAt.toDate().toLocaleDateString('es-co', { day: "numeric", month: "short", year: "numeric" }).replace('de', ' ')}</h3>
                            </div>
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
                        <Compartir />
                    </div>
                </article >
                : <Page_skeleton />
            }
        </>
    )
}

export default Singlearticle