import React from 'react'
import useResearch from '../Hooks/useResearch'
import Loading from './Loading'

const Experience = () => {

  const researchs = useResearch()

  return (
    <article className="engineering_section">
      <div className="visualization-div-header"></div>
      <h2 className="title-actualidad">
        INVESTIGACIÓN Y DESARROLLO
      </h2>
      <p className='description-actualidad'>
        Descubre las últimas investigaciones y proyectos innovadores llevados a cabo por nuestros académicos y estudiantes. Profundiza en las contribuciones que nuestra universidad hace al conocimiento y al avance científico.
      </p>

      {researchs ? (
        <div className="body-actualidad">
          {
            researchs?.map((research, i) => (
              <div className="Card-actualidad" key={research.id}>
                <div className="news-number">{`News #${i + 1}`}</div>
                <h3 className="Card-actualidad-title">{research.Title}</h3>
                <img className='img-actualidad' src={research.Pic} alt="" />
                <h4 className="Card-actualidad-Editor">{`By ${research.Editor}`}</h4>
                <p className="Card-actualidad-body">{research.Body}</p>
                <h5 className="Card-actualidad-Date">{research.Date}</h5>
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
                        const truncatedText = research.Title.slice(0, 50);
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

export default Experience