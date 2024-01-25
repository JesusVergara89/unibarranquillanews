import React from 'react'
import useAsuntos from '../Hooks/useAsuntos'
import '../Styles/Asuntosx.css'

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

            <div className="body-actualidad">
                {
                    asuntos?.map((asunto, i) => (
                        <div className="Card-actualidad" key={asunto.id}>
                            <div className="news-number">{`News #${i + 1}`}</div>
                            <h3 className="Card-actualidad-title">{asunto.Title}</h3>
                            <img className='img-actualidad' src={asunto.Pic} alt="" />
                            <h4 className="Card-actualidad-Editor">{`By ${asunto.Editor}`}</h4>
                            <p className="Card-actualidad-body">{asunto.Body}</p>
                            <h5 className="Card-actualidad-Date">{asunto.Date}</h5>
                        </div>
                    ))
                }
            </div>
        </article>
    )
}

export default Asuntox