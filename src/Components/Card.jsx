import React from 'react'
import "../Styles/card.css"
import { useNavigate } from 'react-router-dom'

const Card = ({ unit }) => {
    const navigate = useNavigate()
    function Navi(e) {
        navigate(`/${e.Seccion}/${e.Id}`)
    }
    return (
        <div key={unit.Pic} onClick={() => Navi(unit)} className="recent-news-card">
            <div className='Photo-cards'>
                <img src={unit.Pic} loading="lazy" className="recent-news-img" />
            </div>
            <div className='Body-cards'>
                <h3 className="recent-news-title">{unit.Title.slice(0, 90) + " ..."}</h3>
                <p className='recent-body'>{unit.Body.slice(0, 130) + " ..."}</p>
            </div>
            <button className="recen-btn">
                ver
            </button>
        </div>
    )
}

export default Card