import React from 'react'
import useVida from '../Hooks/useVida'
import Loading from './Loading'

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

      {vidas ? (
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
                <button className="Card-link"> <a href={vida.Link} target="_blank" rel="noopener noreferrer">Ver más</a> </button>
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
                        const truncatedText = vida.Title.slice(0, 50);
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

export default Vida