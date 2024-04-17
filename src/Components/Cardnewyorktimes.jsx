import React from 'react'
import '../Styles/Cardnewyorktimes.css'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import HTMLReactParser from 'html-react-parser'

const Cardnewyorktimes = ({ article, database, active = false, name }) => {

    const TimeReading = (text, wordsPerMinutes = 200) => {
        const words = text.trim().split(/\s+/).length;
        const timeToReadPerMinutes = words / wordsPerMinutes;
        const RoundedTimeRead = Math.ceil(timeToReadPerMinutes);
        return RoundedTimeRead;
    }

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        } else {
            return text;
        }
    }

    return (
        <>
            {article.description ?
                <Link to={!active ? `/${database}/${article.id}` : `/${database}/${name}/${article.id}`}>
                    <article className="card-newyork">
                        <div className="newyork-title">
                            {truncateText(article.title, 47)}
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
                                <img src={article.avatar} alt="" />
                                <h3>{article.autor}</h3>
                                <h4>{`${TimeReading(article.description)} min. read`}</h4>
                            </div>

                            <div className="newyork-description-autor">
                                <p>{HTMLReactParser(truncateText(article.description, 120))} </p>
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