import React, { useContext, useEffect, useState } from 'react'
import '../Styles/Cardnewyorktimes.css'
import Jesus from '../Images/Jesus.jpg'
import Brian from '../Images/Brian.jpg'
import Gilberto from '../Images/Gilberto.jpg'
import Aleja from '../Images/Aleja.jpg'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { Acesscontext } from './Context/Acesscontext'

const Cardnewyorktimes = ({ article, database }) => {
    const [avatar, setAvatar] = useState(null)
    const{access}=useContext(Acesscontext)

    useEffect(() => {
        functionAvatar();
    }, [access]);
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
                        setAvatar(Aleja);
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

    const TimeReading = (text, wordsPerMinutes = 200) => {
        const words = text.trim().split(/\s+/).length;
        const timeToReadPerMinutes = words / wordsPerMinutes;
        const RoundedTimeRead = Math.ceil(timeToReadPerMinutes);
        return RoundedTimeRead;
    }

    return (
        <>
            {article.description ?
                <Link to={`/${database}/${article.id}`}>
                    <article className="card-newyork">
                        <div className="newyork-title">
                            {article.title.slice(0, 50) + " ..."}
                        </div>
                        <div className="newyork-img">
                            <img src={article.imageUrl} alt="" />
                        </div>
                        <div className="newyork-information">
                            <h3>{article.autor}</h3>
                            <div className="newyork-brief">
                                <div className="newyork-description-autor">
                                    <p>
                                        {article.description.slice(0, 40) + " ..."}
                                    </p>
                                    <h4>{`${TimeReading(article.description)} min. read`}</h4>
                                </div>
                                <div className="newyork-img-autor">
                                    <img src={avatar} alt="" />
                                </div>
                            </div>
                        </div>
                    </article>
                </Link>
                :
                <Loading />
            }
        </>
    )
}

export default Cardnewyorktimes