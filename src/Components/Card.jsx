import React from 'react'
import "../Styles/card.css"

const Card = ({ unit }) => {
    return (
        <div onClick={() => openUrl(unit.interLink)} className="recent-news-card">
            <img src={unit.Pic} alt="" className="recent-news-img" />
            <h3 className="recent-news-title">{unit.Title.slice(0, 55)+"..."}</h3>
            <button onClick={() => openUrl(unit.interLink)} className="recen-btn">
                <a href={unit.interLink} target="_blank" rel="noopener noreferrer">ver</a>
            </button>
        </div>
    )
}

export default Card