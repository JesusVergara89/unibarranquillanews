import React from 'react'
import '../Styles/Columns.css'
import { useNavigate } from 'react-router-dom'

const Columns = () => {
    

    const navigateEngi = useNavigate()
    
    const navigateTravel = useNavigate()

    const navigateLiterature = useNavigate()

    const navigateExperience = useNavigate()

    const navigateAsuntos = useNavigate()

    return (
        <div className="container">
            <button className='outside-btn' onClick={() => navigateEngi('/ENGINEERING')}  >
                <img onClick={() => navigateEngi('/ENGINEERING')} src="https://photo-data-base.netlify.app/assets/people.dd634ce8.jpg" />
                <h2 >Ver más</h2>
                <h3>Actualidad Universitaria</h3>
            </button>

            <button id='outside-btn' onClick={() => navigateTravel('/TRAVEL')}  >
                <img onClick={() => navigateTravel('/TRAVEL')}  src="https://photo-data-base.netlify.app/assets/arte.be73a92a.jpg" />
                <h2 >Ver más</h2>
                <h3>Cultura y Arte</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateLiterature('/LITERATURE')} >
                <img onClick={() => navigateLiterature('/LITERATURE')} src="https://photo-data-base.netlify.app/assets/deporte.e5110516.jpg" />
                <h2 >Ver más</h2>
                <h3>Deportes Universitarios</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateExperience('/EXPERIENCE')} >
                <img onClick={() => navigateExperience('/EXPERIENCE')} src="https://photo-data-base.netlify.app/assets/microscope.f118c0e4.jpg" />
                <h2 >Ver más</h2>
                <h3>Investigación y Desarrollo</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateAsuntos('/ASUNTOS')} >
                <img onClick={() => navigateAsuntos('/ASUNTOS')}  src="https://photo-data-base.netlify.app/assets/escuela.28c8ae9e.jpg" />
                <h2 >Ver más</h2>
                <h3>Asuntos Estudiantiles</h3>
            </button>

            <button className='outside-btn' >
                <img  src="https://photo-data-base.netlify.app/assets/estudiantes.a90aad50.jpg" />
                <h2 >Ver más</h2>
                <h3>Vida Estudiantil</h3>
            </button>

            <button className='outside-btn' >
                <img src="https://photo-data-base.netlify.app/assets/evento.b25824db.jpg" />
                <h2 >Ver más</h2>
                <h3>Eventos y Actividades</h3>
            </button>

            <button className='outside-btn' >
                <img  src="https://photo-data-base.netlify.app/assets/entrevista.6f892194.jpg" />
                <h2 >Ver más</h2>
                <h3>Entrevistas y Perfiles</h3>
            </button>

        </div >
    )
}

export default Columns