import React from 'react'
import '../Styles/Columns.css'
import { useNavigate } from 'react-router-dom'
import actualidad from '../Images/people.jpg'
import cultura from '../Images/arte.jpg'
import deportes from '../Images/deporte.jpg'
import investigación from '../Images/microscope.jpg'
import asuntos from '../Images/city.jpg'
import vidau from '../Images/estudiantes.jpg'
import evento from '../Images/evento.jpg'
import entrevista from '../Images/entrevista.jpg'
import tecnologia from '../Images/tech.jpg'
import blogmain from '../Images/blogmain.jpg'


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

    const navigateReadBlog = useNavigate()

    return (
        <div className="container">
            <button className='outside-btn' onClick={() => navigateEngi('/ACTUALIDAD')}  >
                <img onClick={() => navigateEngi('/ACTUALIDAD')} src={actualidad} />
                <h2 >Ver más</h2>
                <h3>Actualidad</h3>
            </button>

            <button id='outside-btn' onClick={() => navigateTravel('/CULTURA')}  >
                <img onClick={() => navigateTravel('/CULTURA')} src={cultura} />
                <h2 >Ver más</h2>
                <h3>Cultura y Arte</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateLiterature('/DEPORTES')} >
                <img onClick={() => navigateLiterature('/DEPORTES')} src={deportes} />
                <h2 >Ver más</h2>
                <h3>Deportes</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateExperience('/INVESTIGACION')} >
                <img onClick={() => navigateExperience('/INVESTIGACION')} src={investigación} />
                <h2 >Ver más</h2>
                <h3>Investigación y Desarrollo</h3>
            </button>


            <button className='outside-btn' onClick={() => navigateReadBlog('/READBLOG')} >
                <img src={blogmain} />
                <h2 >Ver más</h2>
                <h3>Unibarranquilla blog</h3>
            </button>


            <button className='outside-btn' onClick={() => navigateAsuntos('/ASUNTOS')} >
                <img onClick={() => navigateAsuntos('/ASUNTOS')} src={asuntos} />
                <h2 >Ver más</h2>
                <h3>Mi universidad, mi ciudad</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateVida('/VIDAU')} >
                <img onClick={() => navigateVida('/VIDAU')} src={vidau} />
                <h2 >Ver más</h2>
                <h3>Vida Estudiantil</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateEvento('/EVENTOS')} >
                <img onClick={() => navigateEvento('/EVENTOS')} src={evento} />
                <h2 >Ver más</h2>
                <h3>Eventos y Actividades</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateEntrevista('/ENTREVISTA')} >
                <img onClick={() => navigateEntrevista('/ENTREVISTA')} src={entrevista} />
                <h2 >Ver más</h2>
                <h3>Entrevistas y Perfiles</h3>
            </button>

            <button className='outside-btn' onClick={() => navigateTecnologia('/TECNOLOGIA')} >
                <img onClick={() => navigateEntrevista('/TECNOLOGIA')} src={tecnologia} />
                <h2 >Ver más</h2>
                <h3>Tecnología</h3>
            </button>

        </div >
    )
}

export default Columns