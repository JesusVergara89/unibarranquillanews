import React from 'react'
import useEventos from '../Hooks/useEventos'
import Loading from './Loading'

/**
 * Functional component representing the Events and Activities section of the blog.
 * It showcases upcoming events, conferences, seminars, and social activities that enrich university life.
 */
const Eventos = () => {
  // Custom hook to fetch events
  const eventos = useEventos()
  // Current URL of the page
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/EVENTO'

  return (
    <article className="engineering_section">
      <div className="visualization-div-header"></div>
      <h2 className="title-actualidad">
        EVENTOS Y ACTIVIDADES
      </h2>
      <p className='description-actualidad'>
      Mantente informado sobre los próximos eventos, conferencias, seminarios y actividades sociales que enriquecen nuestra vida universitaria. No te pierdas ninguna oportunidad de participar y ser una parte activa de la comunidad.
      </p>

      {/* Display events if available, otherwise show loading indicator */}
      {eventos ? (
        <div className="body-actualidad">
          {/* Map through events */}
          {
            eventos?.map((evento, i) => (
              <div className="Card-actualidad" key={evento.id}>
                <div className="news-number">{`News #${i + 1}`}</div>
                <h3 className="Card-actualidad-title">{evento.Title}</h3>
                <img className='img-actualidad' src={evento.Pic} alt="" />

                <h4 className="Card-actualidad-Editor">{`By ${evento.Editor}`}</h4>
                <p className="Card-actualidad-body">
                  {/* Split body content by newline and display */}
                  {evento.Body.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </p>
                <h5 className="Card-actualidad-Date">{evento.Date}</h5>
                {/* Button to view full article */}
                <button className="Card-link"> <a href={evento.Link} target="_blank" rel="noopener noreferrer">Ver más</a> </button>
                {/* Social sharing options */}
                <div className='Card-social'>
                  <h5>Comparte:</h5>
                  <div className="Card-social-btn">
                    {/* Share on Facebook */}
                    <button
                      onClick={() => {
                        const url = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
                        window.open(url, '_blank');
                      }}
                    ><i className='bx bxl-facebook-square'></i></button>
                    {/* Share on Twitter */}
                    <button
                      onClick={() => {
                        // Truncate title for Twitter sharing
                        const truncatedText = evento.Title.slice(0, 50);
                        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(truncatedText)}&url=${currentURL}`;
                        window.open(url, '_blank');
                      }}
                    ><i className='bx bxl-twitter' ></i></button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        // Show loading indicator if events are being fetched
        <Loading />
      )}
    </article>
  )
}

export default Eventos
