import React, { useState } from 'react';
import useAsuntos from '../Hooks/useAsuntos';
import Loading from './Loading';

const Asuntox = () => {
    const [paginaActual, setPaginaActual] = useState(1);
    const elementosPorPagina = 3; // Cambia esto al número deseado de elementos por página

    const asuntos = useAsuntos();
    const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/ASUNTOS';

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
                MI UNIVERSIDAD, MI CIUDAD
            </h2>
            <p className='description-actualidad'>
                Esta sección ofrece una visión del vibrante intercambio entre la vida estudiantil y el pulso urbano. Desde destacados eventos académicos hasta iniciativas comunitarias, esta sección captura la esencia de cómo las instituciones educativas y sus entornos se complementan mutuamente, impactando tanto a los estudiantes como a los residentes locales.
            </p>

            {/* Display news articles if available, otherwise show loading indicator */}
            {asuntos ? (
                <div className="body-actualidad">
                    <div className="pagination-controls">
                        <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
                            Anterior
                        </button>
                        <h2 className='current-page'>{`Página ${paginaActual}`}</h2>
                        <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={indiceFinal >= asuntos.length}>
                            Siguiente
                        </button>
                    </div>
                    {/* Mapear solo los elementos correspondientes a la página actual */}
                    {asuntos.slice(indiceInicio, indiceFinal).map((asunto, i) => (
                        <div className="Card-actualidad" key={i}>
                            <div className="news-number">{`News #${indiceInicio + i + 1}`}</div>
                            <h3 className="Card-actualidad-title">{asunto.Title}</h3>
                            <img className='img-actualidad' src={asunto.Pic} alt="" />
                            <h4 className="Card-actualidad-Editor">{`By ${asunto.Editor}`}</h4>
                            <p className="Card-actualidad-body">
                                {/* Split body content by newline and display */}
                                {asunto.Body.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </p>
                            <h5 className="Card-actualidad-Date">{asunto.Date}</h5>
                            {/* Button to view full article */}
                            <button className="Card-link"> <a href={asunto.Link} target="_blank" rel="noopener noreferrer">Ver más</a> </button>
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
                                            const truncatedText = asunto.Title.slice(0, 50);
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
                        <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={indiceFinal >= asuntos.length}>
                            Siguiente
                        </button>
                    </div>
                </div>
            ) : (
                // Show loading indicator if news articles are being fetched
                <Loading />
            )}
        </article>
    );
};

export default Asuntox;
