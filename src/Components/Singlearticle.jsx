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
import { Acesscontext } from './Context/Acesscontext'


const Singlearticle = () => {

    const { access } = useContext(Acesscontext)

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        scrollToTop()
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
        const regex = /(@\S+|#\S+)/g;
        return description.replace(regex, '<span style="font-weight: bold;">$1</span>');
    }

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
    console.log()
    return (
        <>
            {article === 'failed' ? <NotFound /> : article ?
                <article className="singles-article">
                    <div className="single-card">
                        <h1>{article.title}</h1>
                        <img className='Photo' src={article.imageUrl} alt="" />
                        <div className="single-out">
                            <div className="img-autor">
                                <div className="img1-autor">
                                    {article.autor ?
                                        <img src={getLetters(article.autor) === 'w' ? Jesus :
                                            getLetters(article.autor) === 'x' ? Alejandra :
                                                getLetters(article.autor) === 'z' ? Gilberto :
                                                    getLetters(article.autor) === 'y' ? Brian : null} alt="" />
                                        : <Skeleton circle={true} height={50} width={50} style={{ marginLeft: '33%' }} />}
                                </div>
                                <div className="div-autor">
                                    <h2>{article.autor}</h2>
                                </div>
                            </div>
                            <h3>{article.createdAt.toDate().toDateString()}</h3>
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