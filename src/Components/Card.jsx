import React from 'react'
import "../Styles/card.css"

const Card = ({ unit }) => {
    const openUrl = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div onClick={() => openUrl(unit.interLink)} className="recent-news-card">
            <div className='Photo-cards'>
                <img src={unit.Pic} loading="lazy" className="recent-news-img" />
            </div>
            <div className='Body-cards'>
                <h3 className="recent-news-title">{unit.Title.slice(0, 90) + " ..."}</h3>
                <p className='recent-body'>{unit.Body.slice(0, 130) + " ..."}</p>
            </div>
            <button onClick={() => openUrl(unit.interLink)} className="recen-btn">
                <a href={unit.interLink} rel="noopener noreferrer">ver</a>
            </button>
        </div>
    )
}

export default Card