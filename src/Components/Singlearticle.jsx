import React, { useEffect, useState } from 'react'
import '../Styles/Singlearticle.css'
import { useParams } from 'react-router-dom'
import { db10, db2, db3, db4, db5, db6, db7, db8, db9 } from '../firebaseconfig'
import { doc, getDoc } from 'firebase/firestore'
import NotFound from './NotFound'
import Page_skeleton from './Loading-skeleton/Page_skeleton'
import Jesus from '../Images/Jesus.jpg'
import Gilberto from '../Images/Gilberto.jpg'
import Brian from '../Images/Brian.jpg'
import Alejandra from '../Images/Aleja.jpg'
import Compartir from './Compartir/Compartir'


const Singlearticle = ({ access }) => {

    const { name, id } = useParams()

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

    const [article, setArticle] = useState(null)
    const [avatar, setAvatar] = useState(null)
    let functionAvatar = () => {
        if (access && access.length > 0) {
            const autor = access.find(item => {
                return item.Name === 'Jesus' ||
                    item.Name === 'Alejandra' ||
                    item.Name === 'Gilberto' ||
                    item.Name === 'Brian';
            });
            if (autor) {
                switch (autor.Name) {
                    case 'Jesus':
                        setAvatar(Jesus);
                        break;
                    case 'Alejandra':
                        setAvatar(Alejandra);
                        break;
                    case 'Gilberto':
                        setAvatar(Gilberto);
                        break;
                    case 'Brian':
                        setAvatar(Brian);
                        break;
                    default:
                        break;
                }
            }
        }
    }
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
            functionAvatar();
        } else {
            setArticle('failed')
        }
    }, [access])

    const TimeReading = (text, wordsPerMinutes = 200) => {
        const words = text.trim().split(/\s+/).length;
        const timeToReadPerMinutes = words / wordsPerMinutes;
        const RoundedTimeRead = Math.ceil(timeToReadPerMinutes);
        return RoundedTimeRead;
    }

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
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="div-autor">
                                    <h2>{article.autor}</h2>
                                </div>
                            </div>
                            <h3>{article.createdAt.toDate().toDateString()}</h3>
                        </div>

                        <div className="single-description">
                            {article.description && article.description.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                            <h4>{`${TimeReading(article.description)} min. read`}</h4>
                        </div>
                        <Compartir/>
                    </div>
                </article >
                : <Page_skeleton />
            }
        </>
    )
}

export default Singlearticle