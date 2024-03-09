import React from 'react'
import { Link } from 'react-router-dom'

const Mini_card = ({ data }) => {
    const TimeReading = (text, wordsPerMinutes = 200) => {
        const words = text.trim().split(/\s+/).length;
        const timeToReadPerMinutes = words / wordsPerMinutes;
        const RoundedTimeRead = Math.ceil(timeToReadPerMinutes);
        return RoundedTimeRead;
    }
    return (
        <Link className='main_cards'>
            <img src={data.imageUrl} alt="" />
            <section className="Informacion_news_cards">
                <h3>{data.title.slice(0, 50) + "..."}</h3>
                <p>{data.description.slice(0, 80) + "..."}</p>
                <div className="Imformation_date_cards">
                    <p>${data.createdAt.toDate().toLocaleDateString('es-co', { day: "numeric", month: "short", year: "numeric" }).replace('de', ' ')}</p>
                    <p>${TimeReading(data.description)} min. read</p>
                </div>
            </section>
        </Link>
    )
}

export default Mini_card