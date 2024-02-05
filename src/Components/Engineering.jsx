import useActualidad from '../Hooks/useActualidad'
import Loading from './Loading'

/**
 * Functional component representing the Engineering section of the blog.
 * It displays updates, news, and developments related to university life.
 */
const Engineering = () => {
  // Custom hook to fetch updates
  const update = useActualidad()
  // Current URL of the page
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/ENGINEERING'

  return (
    <article className="engineering_section">
      <div className="visualization-div-header"></div>
      <h2 className="title-actualidad">
        ACTUALIDAD UNIVERSITARIA
      </h2>
      <p className='description-actualidad'>
      Mantente informado sobre las últimas noticias, eventos y desarrollos en nuestra universidad. Desde importantes anuncios hasta destacados logros de nuestros estudiantes y profesores.
      </p>

      {/* Display updates if available, otherwise show loading indicator */}
      {update ? (
        <div className="body-actualidad">
          {/* Map through updates */}
          {update?.map((news, i) => (
            <div className="Card-actualidad" key={i}>
              <div className="news-number">{`News #${i + 1}`}</div>
              <h3 className="Card-actualidad-title">{news.Title}</h3>
              <img className='img-actualidad' src={news.Pic} alt="" />
              <h4 className="Card-actualidad-Editor">{`By ${news.Editor}`}</h4>

              <p className="Card-actualidad-body">
                {/* Split body content by newline and display */}
                {news.Body.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </p>
              <h5 className="Card-actualidad-Date">{news.Date}</h5>
              {/* Button to view full article */}
              <button className="Card-link"> <a href={news.Link} target="_blank" rel="noopener noreferrer">Ver más</a> </button>
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
                      const truncatedText = news.Title.slice(0, 50);
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
        // Show loading indicator if updates are being fetched
        <Loading />
      )}
    </article>
  )
}

export default Engineering
