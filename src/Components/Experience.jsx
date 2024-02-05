import React from 'react';
import useResearch from '../Hooks/useResearch';
import Loading from './Loading';

/**
 * Experience component displays information about research and development projects.
 * It retrieves data using the useResearch hook and renders it in a structured format.
 * @returns {JSX.Element} Experience component
 */
const Experience = () => {
  // Fetch research data using custom hook
  const researchs = useResearch();
  // Define current URL for sharing purposes
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/EXPERIENCE';

  return (
    <article className="engineering_section">
      <div className="visualization-div-header"></div>
      <h2 className="title-actualidad">
        INVESTIGACIÓN Y DESARROLLO
      </h2>
      <p className='description-actualidad'>
        Descubre las últimas investigaciones y proyectos innovadores llevados a cabo por nuestros académicos y estudiantes. Profundiza en las contribuciones que nuestra universidad hace al conocimiento y al avance científico.
      </p>

      {/* Render research data if available */}
      {researchs ? (
        <div className="body-actualidad">
          {researchs?.map((research, i) => (
            <div className="Card-actualidad" key={research.id}>
              <div className="news-number">{`News #${i + 1}`}</div>
              <h3 className="Card-actualidad-title">{research.Title}</h3>
              <img className='img-actualidad' src={research.Pic} alt="" />
              <h4 className="Card-actualidad-Editor">{`By ${research.Editor}`}</h4>
              {/* Render research body */}
              <p className="Card-actualidad-body">
                {research.Body.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </p>
              <h5 className="Card-actualidad-Date">{research.Date}</h5>
              {/* Render link to view more details */}
              <button className="Card-link"> <a href={research.Link} target="_blank" rel="noopener noreferrer">Ver más</a> </button>
              {/* Render social media sharing buttons */}
              <div className='Card-social'>
                <h5>Comparte:</h5>
                <div className="Card-social-btn">
                  {/* Facebook share button */}
                  <button
                    onClick={() => {
                      const url = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
                      window.open(url, '_blank');
                    }}
                  ><i className='bx bxl-facebook-square'></i></button>
                  {/* Twitter share button */}
                  <button
                    onClick={() => {
                      const truncatedText = research.Title.slice(0, 50);
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
        // Render loading component while fetching data
        <Loading />
      )}
    </article>
  );
}

export default Experience;
