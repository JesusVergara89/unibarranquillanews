import React, { useEffect, useState } from 'react'
import '../Styles/Singlearticle.css'
import { useParams } from 'react-router-dom'
import { db10, db2, db3, db4, db5, db6, db7, db8, db9 } from '../firebaseconfig'
import { doc, onSnapshot } from 'firebase/firestore'
import Jesus from '../Images/Jesus.jpg'
import Gilberto from '../Images/Gilberto.jpg'
import Brian from '../Images/Brian.jpg'
import Alejandra from '../Images/Aleja.jpg'


const Singlearticle = ({ access }) => {

    const { id, data } = useParams()

    const arrayOfDataBase = [db2, db3, db4, db5, db6, db7, db8, db9, db10];

    const functionReturn = () => {
        if (data === "db2") {
            return arrayOfDataBase[0]
        } else {
            if (data === "db3") {
                return arrayOfDataBase[1]
            } else {
                if (data === "db4") {
                    return arrayOfDataBase[2]
                } else {
                    if (data === "db5") {
                        return arrayOfDataBase[3]
                    } else {
                        if (data === "db6") {
                            return arrayOfDataBase[4]
                        } else {
                            if (data === "db7") {
                                return arrayOfDataBase[5]
                            } else {
                                if (data === "db8") {
                                    return arrayOfDataBase[6]
                                } else {
                                    if (data === "db9") {
                                        return arrayOfDataBase[7]
                                    } else {
                                        if (data === "db10") {
                                            return arrayOfDataBase[8]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
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
        const docRef = doc(functionReturn(), "Articles", id)
        onSnapshot(docRef, (snapshot) => {
            setArticle({ ...snapshot.data(), id: snapshot.id })
        })
        scrollToTop()
        functionAvatar();
    }, [access])

    const TimeReading = (text, wordsPerMinutes = 200) => {
        const words = text.trim().split(/\s+/).length;
        const timeToReadPerMinutes = words / wordsPerMinutes;
        const RoundedTimeRead = Math.ceil(timeToReadPerMinutes);
        return RoundedTimeRead;
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

                        <h4>{`${TimeReading(article.description)} min. read`}</h4>
                    </div>


                </div>


            }
        </article>
    )
}

export default Singlearticle