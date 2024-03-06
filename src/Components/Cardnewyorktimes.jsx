import React, { useContext, useEffect, useState } from 'react'
import '../Styles/Cardnewyorktimes.css'
import Jesus from '../Images/Jesus.jpg'
import Brian from '../Images/Brian.jpg'
import Gilberto from '../Images/Gilberto.jpg'
import Aleja from '../Images/Aleja.jpg'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { Acesscontext } from './Context/Acesscontext'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Cardnewyorktimes = ({ article, database }) => {

    const { access } = useContext(Acesscontext)

    const TimeReading = (text, wordsPerMinutes = 200) => {
        const words = text.trim().split(/\s+/).length;
        const timeToReadPerMinutes = words / wordsPerMinutes;
        const RoundedTimeRead = Math.ceil(timeToReadPerMinutes);
        return RoundedTimeRead;
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
                                    {article.autor ?
                                        <img src={getLetters(article.autor) === 'w' ? Jesus :
                                            getLetters(article.autor) === 'x' ? Alejandra :
                                                getLetters(article.autor) === 'z' ? Gilberto :
                                                    getLetters(article.autor) === 'y' ? Brian : null} alt="" />
                                        : <Skeleton circle={true} height={50} width={50} style={{ marginLeft: '33%' }} />}
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