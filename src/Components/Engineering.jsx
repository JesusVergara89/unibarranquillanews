import React from 'react'
import '../Styles/Engineering.css'
import useActualidad from '../Hooks/useActualidad'


const Engineering = () => {

  const update = useActualidad()

  //console.log(update)

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
          update?.map((news, i) => (
            <div className="Card-actualidad" key={news.id}>
              <h3 className="Card-actualidad-title">{news.Title}</h3>
              <h4 className="Card-actualidad-Editor">{`By ${news.Editor}`}</h4>
              <p className="Card-actualidad-body">{news.Body}</p>
              <h5 className="Card-actualidad-Date">{news.Date}</h5>
            </div>
          ))
        }
      </div>
    </article>
  )
}

export default Engineering