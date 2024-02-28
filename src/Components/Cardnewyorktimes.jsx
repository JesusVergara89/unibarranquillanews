import React, { useEffect, useState } from 'react'
import '../Styles/Cardnewyorktimes.css'
import man from '../Images/man.png'
import woman from '../Images/woman.png'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const Cardnewyorktimes = ({ article, database, access, currentURL, dataTitle, dataDescription }) => {
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

    useEffect(() => {
        functionAvatar();
    }, [access]);

    const TimeReading = (text, wordsPerMinutes = 200) => {
        const words = text.trim().split(/\s+/).length;
        const timeToReadPerMinutes = words / wordsPerMinutes;
        const RoundedTimeRead = Math.ceil(timeToReadPerMinutes);
        return RoundedTimeRead;
    }

    return (
            <>
            { article.description ?
                <Link to={`/SINGLEARTICLE/${database}/${article.id}`}>
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