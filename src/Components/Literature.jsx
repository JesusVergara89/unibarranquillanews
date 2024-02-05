import React from 'react';
import useSport from '../Hooks/useSport';
import Loading from './Loading';

/**
 * Component displaying information about university sports.
 * Fetches sports data using the useSport hook.
 * @returns {JSX.Element} Component JSX
 */
const Literature = () => {
  // Fetch sports data
  const sports = useSport();
  // Current URL of the component
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/LITERATURE';

  return (
    <article className="engineering_section">
      <div className="visualization-div-header"></div>
      <h2 className="title-actualidad">
        UNIVERSITY SPORTS
      </h2>
      <p className='description-actualidad'>
      Sigue de cerca los logros y desempeños de nuestros equipos deportivos. Infórmate sobre eventos deportivos, entrevistas con atletas destacados y análisis de campeonatos universitarios.
      </p>

      {/* Check if sports data is available */}
      {sports ? (
        <div className="body-actualidad">
          {/* Map through sports data and render cards */}
          {sports?.map((sport, i) => (
            <div className="Card-actualidad" key={sport.id}>
              <div className="news-number">{`News #${i + 1}`}</div>
              <h3 className="Card-actualidad-title">{sport.Title}</h3>
              <img className='img-actualidad' src={sport.Pic} alt="" />
              <h4 className="Card-actualidad-Editor">{`By ${sport.Editor}`}</h4>

              <p className="Card-actualidad-body">
                {/* Split body text by new line and map through */}
                {sport.Body.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </p>
              <h5 className="Card-actualidad-Date">{sport.Date}</h5>
              {/* Button to view more details */}
              <button className="Card-link"> <a href={sport.Link} target="_blank" rel="noopener noreferrer">Read more</a> </button>
              {/* Social media sharing buttons */}
              <div className='Card-social'>
                <h5>Share:</h5>
                <div className="Card-social-btn">
                  <button
                    onClick={() => {
                      const url = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
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
        // Display loading component while fetching data
        <Loading />
      )}
    </article>
  );
};

export default Literature;
