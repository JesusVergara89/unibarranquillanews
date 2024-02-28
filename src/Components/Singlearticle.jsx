import React, { useEffect, useState } from 'react'
import '../Styles/Singlearticle.css'
import { useParams } from 'react-router-dom'
import { db10, db2, db3, db4, db5, db6, db7, db8, db9 } from '../firebaseconfig'
import { doc, onSnapshot } from 'firebase/firestore'
import man from '../Images/man.png'
import woman from '../Images/woman.png'


const Singlearticle = ({ access }) => {

    const { id, data } = useParams()

    const arrayOfDataBase = [db2, db3, db4, db5, db6, db7, db8, db9, db10];
    const arrayGuia = ['db2', 'db3', 'db4', 'db5', 'db6', 'db7', 'db8', 'db9', 'db10']
    const functionReturn = () => {
        let dato
        arrayGuia.map((user, index) => {
            if (user === data) {
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
            const docRef = doc(functionReturn(), "Articles", id)
            onSnapshot(docRef, (snapshot) => {
                setArticle({ ...snapshot.data(), id: snapshot.id })
            })
            functionAvatar();
        }, [access])
    }

    return (
        <article className="singles-article">
            {article &&
                <div className="single-card">

                    <h1>{article.title}</h1>

                    <img src={article.imageUrl} alt="" />

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


            }
        </article>
    )
}

export default Singlearticle