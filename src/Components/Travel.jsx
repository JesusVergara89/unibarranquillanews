import React from 'react'
import '../Styles/Travel.css'
import useCulture from '../Hooks/UseCulture'

const Travel = () => {

  const culture =  useCulture()

  console.log(culture)

  return (
    <article className="engineering_section">
      <div className="visualization-div-header"></div>
      <h2 className="title-actualidad">
      CULTURA Y ARTE
      </h2>
      <p className='description-actualidad'>
      Explora la escena cultural y artística en Unibarranquilla. Reseñas de eventos, entrevistas con artistas locales y destacados, así como la cobertura de actividades culturales organizadas por la universidad.
      </p>

      <div className="body-actualidad">
        {
          culture?.map((cult, i) => (
            <div className="Card-actualidad" key={cult.id}>
              <h3 className="Card-actualidad-title">{cult.Title}</h3>
              <h4 className="Card-actualidad-Editor">{`By ${cult.Editor}`}</h4>
              <p className="Card-actualidad-body">{cult.Body}</p>
              <h5 className="Card-actualidad-Date">{cult.Date}</h5>
            </div>
          ))
        }
      </div>
    </article>
  )
}

export default Travel