import React from 'react'
import useEntrevista from '../Hooks/useEntrevista'
import Loading from './Loading'

/**
 * Functional component representing the Interviews and Profiles section of the blog.
 * It showcases in-depth interviews with leaders, academics, and personalities within the university community.
 */
const Entrevista = () => {
  // Custom hook to fetch interviews
  const entrevista = useEntrevista()
  // Current URL of the page
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/ENTREVISTA'

  return (
    <article className="engineering_section">
      <div className="visualization-div-header"></div>
      <h2 className="title-actualidad">
        ENTREVISTAS Y PERFILES
      </h2>
      <p className='description-actualidad'>
        Get to know the leaders, academics, and personalities who are part of our university community. Discover their stories, experiences, and contributions to higher education.
      </p>

      {/* Display interviews if available, otherwise show loading indicator */}
      {entrevista ? (
        <div className="body-actualidad">
          {/* Map through interviews */}
          {
            entrevista?.map((entrev, i) => (
              <div className="Card-actualidad" key={entrev.id}>
                <div className="news-number">{`News #${i + 1}`}</div>
                <h3 className="Card-actualidad-title">{entrev.Title}</h3>
                <img className='img-actualidad' src={entrev.Pic} alt="" />
                <h4 className="Card-actualidad-Editor">{`By ${entrev.Editor}`}</h4>

                <p className="Card-actualidad-body">
                  {/* Split body content by newline and display */}
                  {entrev.Body.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </p>
                <h5 className="Card-actualidad-Date">{entrev.Date}</h5>
                {/* Button to view full article */}
                <button className="Card-link"> <a href={entrev.Link} target="_blank" rel="noopener noreferrer">Ver más</a> </button>
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
                        const truncatedText = entrev.Title.slice(0, 50);
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
        // Show loading indicator if interviews are being fetched
        <Loading />
      )}
    </article>
  )
}

export default Entrevista
