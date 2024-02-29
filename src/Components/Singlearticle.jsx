import React, { useEffect, useState } from 'react'
import '../Styles/Singlearticle.css'
import { useParams } from 'react-router-dom'
import { db10, db2, db3, db4, db5, db6, db7, db8, db9 } from '../firebaseconfig'
import { doc, getDoc } from 'firebase/firestore'
import man from '../Images/man.png'
import woman from '../Images/woman.png'
import NotFound from './NotFound'
import Page_skeleton from './Loading-skeleton/Page_skeleton'


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
    const functionAvatar = () => {
        if (access && access.length > 0) {
            access.forEach(item => {
                const autor = item.Name;
                if (autor === 'Jesus' || autor === 'Brian' || autor === 'Gilberto') {
                    setAvatar(man);
                } else if (autor === 'Alejandra') {
                    setAvatar(woman);
                }
            });
        }
    }

    {
        useEffect(() => {
            setArticle(undefined)
            let validar = functionReturn()
            if (validar) {
                const docRef = doc(functionReturn(), "Articles", id)
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
    }
    console.log(article)

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
                        </div>


                    </div>
                </article>
                : <Page_skeleton/>
            }
        </>
    )
}

export default Singlearticle