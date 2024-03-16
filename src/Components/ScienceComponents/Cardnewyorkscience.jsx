import React from 'react'
import '../../Styles/Cardnewyorktimes.css'
import Jesus from '../../Images/Jesus.jpg'
import Brian from '../../Images/Brian.jpg'
import Gilberto from '../../Images/Gilberto.jpg'
import Alejandra from '../../Images/Aleja.jpg'
import josemanuel from '../../Images/josemanuel.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Cardnewyorkscience = ({idcollection,article}) => {

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
            'jose diaz': 'p'
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
            <Link to={`/CIENCIAS/${idcollection}/${article.id}`}>
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
                                                getLetters(article.autor) === 'p' ? josemanuel : null} alt="" />
                                : ''}
                            <h3>{article.autor}</h3>
                            <h4>{`${TimeReading(article.description)} min. read`}</h4>
                        </div>

                        <div className="newyork-description-autor">
                            <p>
                                {article.description.slice(0, 120) + " ..."}
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

export default Cardnewyorkscience