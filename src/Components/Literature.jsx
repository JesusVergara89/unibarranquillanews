import React from 'react'
import '../Styles/Literature.css'
import useSport from '../Hooks/useSport'

const Literature = () => {

  const sports = useSport()

  return (
    <article className="engineering_section">
      <div className="visualization-div-header"></div>
      <h2 className="title-actualidad">
        ACTUALIDAD UNIVERSITARIA
      </h2>
      <p className='description-actualidad'>
        Mantente al tanto de las últimas noticias, eventos y desarrollos en nuestra universidad. Desde anuncios importantes hasta logros destacados de nuestros estudiantes y profesores.
      </p>

      <div className="body-actualidad">
        {
          sports?.map((sport, i) => (
            <div className="Card-actualidad" key={sport.id}>
              <h3 className="Card-actualidad-title">{sport.Title}</h3>
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