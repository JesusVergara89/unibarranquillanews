import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../Styles/Singlearticle.css'
import { db12 } from '../../firebaseconfig'
import Skeleton from 'react-loading-skeleton'
import Page_skeleton from '../Loading-skeleton/Page_skeleton'
import { doc, getDoc } from 'firebase/firestore'
import Jesus from '../../Images/Jesus.jpg'
import Brian from '../../Images/Brian.jpg'
import Gilberto from '../../Images/Gilberto.jpg'
import Alejandra from '../../Images/Aleja.jpg'
import josemanuel from '../../Images/josemanuel.jpg'
import Compartir from '../Compartir/Compartir'
import NotFound from '../NotFound'
import HTMLReactParser from 'html-react-parser'

const Singlearticlescience = () => {

    const { collection, id } = useParams()

    const [article, setArticle] = useState(null)

    useEffect(() => {
        const docRef = doc(db12, collection, id)
        getDoc(docRef)
            .then((resp) => {
                resp.exists() ?
                    setArticle({ ...resp.data(), id: resp.id })
                    : setArticle('failed')
            })
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
            'jose diaz': 'p'
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

    return (
        (
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
                                                    getLetters(article.autor) === 'y' ? Brian :
                                                        getLetters(article.autor) === 'p' ? josemanuel : null} alt="" />
                                        : <Skeleton circle={true} height={50} width={50} style={{ marginLeft: '33%' }} />}
                                    <h2>{article.autor}</h2>
                                    <h3>{article.createdAt.toDate().toLocaleDateString('es-co', { day: "numeric", month: "short", year: "numeric" }).replace('de', ' ')}</h3>
                                </div>
                            </div>

                            <div className="single-description">
                                {article.description ?
                                    <p>
                                        {HTMLReactParser(article.description)}
                                    </p> : ''}
                                <h4>{`${TimeReading(article.description)} min. read`}</h4>
                            </div>
                            <div className='main-compartir'>
                                <a className='Fuente' href={article.link} target="_blank"> Ver mas</a>
                            </div>
                            <Compartir link={collection} />
                        </div>
                    </article >
                    : <Page_skeleton />
                }
            </>
        )
    )
}

export default Singlearticlescience