import React from 'react'
import '../Styles/Literature.css'
import useSport from '../Hooks/useSport'

const Literature = () => {

  const sports = useSport()

  console.log(sports)

  return (
    <article className="engineering_section">
      <div className="visualization-div-header"></div>
      <h2 className="title-actualidad">
        DEPORTES UNIVERSITARIOS
      </h2>
      <p className='description-actualidad'>
      Sigue de cerca los logros y desempeños de nuestros equipos deportivos. Entérate de los eventos deportivos, entrevistas con atletas destacados y análisis de los campeonatos universitarios.

      </p>

      <div className="body-actualidad">
        {
          sports?.map((sport, i) => (
            <div className="Card-actualidad" key={sport.id}>
              <div className="news-number">{`News #${i + 1}`}</div>
              <h3 className="Card-actualidad-title">{sport.Title}</h3>
              <img className='img-actualidad' src={sport.Pic} alt="" />
              <h4 className="Card-actualidad-Editor">{`By ${sport.Editor}`}</h4>
              <p className="Card-actualidad-body">{sport.Body}</p>
              <h5 className="Card-actualidad-Date">{sport.Date}</h5>
            </div>
          ))
        }
      </div>
    </article>
  )
}

export default Literature