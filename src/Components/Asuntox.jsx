import React from 'react'
import useAsuntos from '../Hooks/useAsuntos'
import Loading from './Loading'

const Asuntox = () => {

    const asuntos = useAsuntos()

    return (
        <article className="engineering_section">
            <div className="visualization-div-header"></div>
            <h2 className="title-actualidad">
                ASUNTOS UNIVERSITARIOS
            </h2>
            <p className='description-actualidad'>
                Enfocándonos en las preocupaciones y necesidades de los estudiantes, abordaremos temas relevantes como becas, orientación académica, oportunidades de empleo y todo aquello que impacta directamente en tu experiencia universitaria.
            </p>

            {asuntos ? (
                <div className="body-actualidad">
                    {
                        asuntos?.map((asunto, i) => (
                            <div className="Card-actualidad" key={i}>
                                <div className="news-number">{`News #${i + 1}`}</div>
                                <h3 className="Card-actualidad-title">{asunto.Title}</h3>
                                <img className='img-actualidad' src={asunto.Pic} alt="" />
                                <h4 className="Card-actualidad-Editor">{`By ${asunto.Editor}`}</h4>
                                <p className="Card-actualidad-body">{asunto.Body}</p>
                                <h5 className="Card-actualidad-Date">{asunto.Date}</h5>
                                <button className="Card-link"> <a href={asunto.Link} target="_blank" rel="noopener noreferrer">Ver más</a> </button>
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
                                                const truncatedText = asunto.Title.slice(0, 50);
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

export default Asuntox