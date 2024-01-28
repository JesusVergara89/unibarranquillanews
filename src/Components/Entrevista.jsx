import React from 'react'
import useEntrevista from '../Hooks/useEntrevista'
import Loading from './Loading'

const Entrevista = () => {

  const entrevista = useEntrevista()

  console.log(entrevista)

  return (
    <article className="engineering_section">
      <div className="visualization-div-header"></div>
      <h2 className="title-actualidad">
        ACTUALIDAD UNIVERSITARIA
      </h2>
      <p className='description-actualidad'>
        Mantente al tanto de las últimas noticias, eventos y desarrollos en nuestra universidad. Desde anuncios importantes hasta logros destacados de nuestros estudiantes y profesores.
      </p>

      {entrevista ? (
        <div className="body-actualidad">
          {
            entrevista?.map((entrev, i) => (
              <div className="Card-actualidad" key={entrev.id}>
                <div className="news-number">{`News #${i + 1}`}</div>
                <h3 className="Card-actualidad-title">{entrev.Title}</h3>
                <img className='img-actualidad' src={entrev.Pic} alt="" />
                <h4 className="Card-actualidad-Editor">{`By ${entrev.Editor}`}</h4>
                <p className="Card-actualidad-body">{entrev.Body}</p>
                <h5 className="Card-actualidad-Date">{entrev.Date}</h5>
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
                        const truncatedText = entrev.Title.slice(0, 50);
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

export default Entrevista