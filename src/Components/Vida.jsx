import React from 'react'
import useVida from '../Hooks/useVida'

const Vida = () => {

    const vidas = useVida()
  return (
    <article className="engineering_section">
    <div className="visualization-div-header"></div>
    <h2 className="title-actualidad">
      VIDA ESTUDIANTIL
    </h2>
    <p className='description-actualidad'>
    Explora la experiencia estudiantil en Unibarranquilla. Desde consejos prácticos hasta perfiles de estudiantes destacados, te ofrecemos una visión completa de la vida en el campus.
    </p>

    <div className="body-actualidad">
      {
        vidas?.map((vida, i) => (
          <div className="Card-actualidad" key={vida.id}>
            <div className="news-number">{`News #${i + 1}`}</div>
            <h3 className="Card-actualidad-title">{vida.Title}</h3>
            <img className='img-actualidad' src={vida.Pic} alt="" />
            <h4 className="Card-actualidad-Editor">{`By ${vida.Editor}`}</h4>
            <p className="Card-actualidad-body">{vida.Body}</p>
            <h5 className="Card-actualidad-Date">{vida.Date}</h5>
          </div>
        ))
      }
    </div>
  </article>
  )
}

export default Vida