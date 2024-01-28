import React from 'react'
import useSport from '../Hooks/useSport'
import Loading from './Loading'

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

      {sports ? (
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
                        const truncatedText = sport.Title.slice(0, 50);
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

export default Literature