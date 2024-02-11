import React from 'react'
import '../Styles/Columns.css'
import { useNavigate } from 'react-router-dom'

const Columns = () => {


    const navigateEngi = useNavigate()

    const navigateTravel = useNavigate()

    const navigateLiterature = useNavigate()

    const navigateExperience = useNavigate()

    const navigateAsuntos = useNavigate()

    const navigateVida = useNavigate()

    const navigateEvento = useNavigate()

    const navigateEntrevista = useNavigate()

    const navigateTecnologia = useNavigate()

    return (
        <div className="container">
            <button className='outside-btn' onClick={() => navigateEngi('/ENGINEERING')}  >
                <img onClick={() => navigateEngi('/ACTUALIDAD')} src="https://photo-data-base.netlify.app/assets/people.e4fef31b.jpg" />
                <h2 >Ver más</h2>
                <h3>Actualidad</h3>
            </button>

            <button id='outside-btn' onClick={() => navigateTravel('/TRAVEL')}  >
                <img onClick={() => navigateTravel('/CULTURA')} src="https://photo-data-base.netlify.app/assets/arte.a47a54ae.jpg" />
                <h2 >Ver más</h2>
                <h3>Cultura y Arte</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateLiterature('/LITERATURE')} >
                <img onClick={() => navigateLiterature('/DEPORTES')} src="https://photo-data-base.netlify.app/assets/deporte.01eed798.jpg" />
                <h2 >Ver más</h2>
                <h3>Deportes</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateExperience('/EXPERIENCE')} >
                <img onClick={() => navigateExperience('/INVESTIGACION')} src="https://photo-data-base.netlify.app/assets/microscope.39879e23.jpg" />
                <h2 >Ver más</h2>
                <h3>Investigación y Desarrollo</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateAsuntos('/ASUNTOS')} >
                <img onClick={() => navigateAsuntos('/ASUNTOS')} src="https://photo-data-base.netlify.app/assets/city.7f4b3f45.jpg" />
                <h2 >Ver más</h2>
                <h3>Mi universidad, mi ciudad</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateVida('/VIDA')} >
                <img onClick={() => navigateVida('/VIDAU')} src="https://photo-data-base.netlify.app/assets/estudiantes.1638c5fc.jpg" />
                <h2 >Ver más</h2>
                <h3>Vida Estudiantil</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateEvento('/EVENTO')} >
                <img onClick={() => navigateEvento('/EVENTOS')} src="https://photo-data-base.netlify.app/assets/evento.99182bf6.jpg" />
                <h2 >Ver más</h2>
                <h3>Eventos y Actividades</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateEntrevista('/ENTREVISTA')} >
                <img  onClick={() => navigateEntrevista('/ENTREVISTA')} src="https://photo-data-base.netlify.app/assets/entrevista.edf8a3c4.jpg" />
                <h2 >Ver más</h2>
                <h3>Entrevistas y Perfiles</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateTecnologia('/TECNOLOGIA')} >
                <img  onClick={() => navigateEntrevista('/TECNOLOGIA')} src="https://photo-data-base.netlify.app/assets/tech.cd4fc329.jpg" />
                <h2 >Ver más</h2>
                <h3>Tecnología</h3>
            </button>

        </div >
    )
}

export default Columns