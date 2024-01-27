import React from 'react'
import useEventos from '../Hooks/useEventos'
import '../Styles/Eventos.css'
import Loading from './Loading'

const Eventos = () => {
  const eventos = useEventos()

  return (
    <article className="engineering_section">
      <div className="visualization-div-header"></div>
      <h2 className="title-actualidad">
        EVENTOS Y ACTIVIDADES
      </h2>
      <p className='description-actualidad'>
        Entérate de los eventos próximos, conferencias, seminarios y actividades sociales que enriquecen nuestra vida universitaria. No te pierdas ninguna oportunidad de participar y ser parte activa de la comunidad.
      </p>

      {eventos ? (
        <div className="body-actualidad">
          {
            eventos?.map((evento, i) => (
              <div className="Card-actualidad" key={evento.id}>
                <div className="news-number">{`News #${i + 1}`}</div>
                <h3 className="Card-actualidad-title">{evento.Title}</h3>
                <img className='img-actualidad' src={evento.Pic} alt="" />
                <h4 className="Card-actualidad-Editor">{`By ${evento.Editor}`}</h4>
                <p className="Card-actualidad-body">{evento.Body}</p>
                <h5 className="Card-actualidad-Date">{evento.Date}</h5>
                <div className='Card-social'>
                  <h5>Comparte:</h5>
                  <div className="Card-social-btn">
                    <button
                      onClick={() => {
                        const url = `https://www.facebook.com/sharer/sharer.php?u=https://bit.ly/3SzyQkU'`;
                        window.open(url, '_blank');
                      }}
                    ><i className='bx bxl-facebook-square'></i></button>
                    <button
                      onClick={() => {
                        const truncatedText = evento.Title.slice(0, 50);
                        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(truncatedText)}&url=https://bit.ly/3SzyQkU`;
                        window.open(url, '_blank');
                      }}
                    ><i className='bx bxl-twitter' ></i></button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <Loading />
      )}
    </article>
  )
}

export default Eventos