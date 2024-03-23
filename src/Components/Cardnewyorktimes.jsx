import React, { useContext } from 'react'
import '../Styles/Cardnewyorktimes.css'
import Jesus from '../Images/Jesus.jpg'
import Brian from '../Images/Brian.jpg'
import Gilberto from '../Images/Gilberto.jpg'
import Alejandra from '../Images/Aleja.jpg'
import josemanuel from '../Images/josemanuel.jpg'
import omar from '../Images/omar.jpg'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import HTMLReactParser from 'html-react-parser'

const Cardnewyorktimes = ({ article, database }) => {

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
            'gilberto gonzales': 'z',
            'jose diaz': 'p',
            'omar garcia': 'q'
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
                            {article.title.slice(0, 47) + " ..."}
                        </div>
                        <div className="newyork-img">
                            <LazyLoadImage
                                src={article.imageUrl}
                                effect="blur"
                                placeholderSrc={article.imageUrl}
                            />
                        </div>
                        <div className="newyork-information">
                            <div className="newyork-brief">
                                {article.autor ?
                                    <img src={getLetters(article.autor) === 'w' ? Jesus :
                                        getLetters(article.autor) === 'x' ? Alejandra :
                                            getLetters(article.autor) === 'z' ? Gilberto :
                                                getLetters(article.autor) === 'y' ? Brian :
                                                    getLetters(article.autor) === 'p' ? josemanuel :
                                                        getLetters(article.autor) === 'q' ? omar : null} alt="" />
                                    : ''}
                                <h3>{article.autor}</h3>
                                <h4>{`${TimeReading(article.description)} min. read`}</h4>
                            </div>

                            <div className="newyork-description-autor">
                                <p>
                                    {HTMLReactParser(article.description.slice(0, 120) + " ...")}
                                </p>
                            </div>
                        </div>
                    </article>
                </Link>
                :
                ''
            }
        </>
    )
}

export default Cardnewyorktimes