import React, { useState } from 'react';
import useEntrevista from '../Hooks/useEntrevista';
import Loading from './Loading';

const Entrevista = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const elementosPorPagina = 3; // Cambia esto al número deseado de elementos por página

  const entrevista = useEntrevista();
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/ENTREVISTA';

  // Calcular los índices de inicio y fin de los elementos a mostrar en la página actual
  const indiceInicio = (paginaActual - 1) * elementosPorPagina;
  const indiceFinal = paginaActual * elementosPorPagina;

  // Manejar el cambio de página
  const cambiarPagina = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  return (
    <article className="engineering_section">
      <div className="visualization-div-header"></div>
      <h2 className="title-actualidad">
        ENTREVISTAS Y PERFILES
      </h2>
      <p className='description-actualidad'>
        Conoce a los líderes, académicos y personalidades que forman parte de nuestra comunidad universitaria. Descubre sus historias, experiencias y contribuciones a la educación superior.
      </p>

      {/* Display interviews if available, otherwise show loading indicator */}
      {entrevista ? (
        <div className="body-actualidad">
          <div className="pagination-controls">
            <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
              Anterior
            </button>
            <h2 className='current-page'>{`Página ${paginaActual}`}</h2>
            <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={indiceFinal >= entrevista.length}>
              Siguiente
            </button>
          </div>
          {/* Mapear solo los elementos correspondientes a la página actual */}
          {entrevista.slice(indiceInicio, indiceFinal).map((entrev, i) => (
            <div className="Card-actualidad" key={entrev.id}>
              <div className="news-number">{`News #${indiceInicio + i + 1}`}</div>
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
          {/* Controles de paginación */}
          <div className="pagination-controls">
            <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
              Anterior
            </button>
            <h2 className='current-page'>{`Página ${paginaActual}`}</h2>
            <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={indiceFinal >= entrevista.length}>
              Siguiente
            </button>
          </div>
        </div>
      ) : (
        // Show loading indicator if interviews are being fetched
        <Loading />
      )}
    </article>
  );
};

export default Entrevista;
