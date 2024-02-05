import React from 'react'
import useTecnologia from '../Hooks/useTecnologia';
import Loading from './Loading';

const Tecnologia = () => {

    const tecnologias = useTecnologia()

    return (
        <article className="engineering_section">
            <div className="visualization-div-header"></div>
            <h2 className="title-actualidad">
                TECNOLOGIA
            </h2>
            <p className='description-actualidad'>
                En este espacio, exploraremos las últimas innovaciones, tendencias y descubrimientos en el fascinante mundo de la tecnología. Desde los avances en inteligencia artificial hasta los gadgets más recientes, aquí encontrarás todo lo que necesitas saber para mantenerte actualizado en la era digital.
            </p>

            {/* Check if sports data is available */}
            {tecnologias ? (
                <div className="body-actualidad">
                    {/* Map through sports data and render cards */}
                    {tecnologias?.map((tech, i) => (
                        <div className="Card-actualidad" key={tech.id}>
                            <div className="news-number">{`News #${i + 1}`}</div>
                            <h3 className="Card-actualidad-title">{tech.Title}</h3>
                            <img className='img-actualidad' src={tech.Pic} alt="" />
                            <h4 className="Card-actualidad-Editor">{`By ${tech.Editor}`}</h4>

                            <p className="Card-actualidad-body">
                                {/* Split body text by new line and map through */}
                                {tech.Body.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </p>
                            <h5 className="Card-actualidad-Date">{tech.Date}</h5>
                            {/* Button to view more details */}
                            <button className="Card-link"> <a href={tech.Link} target="_blank" rel="noopener noreferrer">Read more</a> </button>
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
                                            const truncatedText = tech.Title.slice(0, 50);
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

export default Tecnologia