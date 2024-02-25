import React from 'react'
import '../Styles/Columns.css'
import { Link } from 'react-router-dom'
import actualidad from '../Images/people.jpg'
import cultura from '../Images/arte.jpg'
import deportes from '../Images/deporte.jpg'
import investigación from '../Images/microscope.jpg'
import asuntos from '../Images/city.jpg'
import vidau from '../Images/estudiantes.jpg'
import evento from '../Images/evento.jpg'
import entrevista from '../Images/entrevista.jpg'
import tecnologia from '../Images/tech.jpg'


const Columns = () => {

    return (
        <div className="container">
            <Link to={'/ACTUALIDAD'}>
                <button className='outside-btn' >
                    <img src={actualidad} />
                    <h2 >Ver más</h2>
                    <h3>Actualidad</h3>
                </button>
            </Link>
            <Link to={'/CULTURA'}>
                <button id='outside-btn'  >
                    <img src={cultura} />
                    <h2 >Ver más</h2>
                    <h3>Cultura y Arte</h3>
                </button>
            </Link>
            <Link to={'/DEPORTES'}>
                <button className='outside-btn' >
                    <img src={deportes} />
                    <h2 >Ver más</h2>
                    <h3>Deportes</h3>
                </button>
            </Link>
            <Link to={'/INVESTIGACION'}>
                <button className='outside-btn' >
                    <img src={investigación} />
                    <h2 >Ver más</h2>
                    <h3>Investigación y Desarrollo</h3>
                </button>
            </Link>
            <Link to={'/READBLOG'}>
                <button className='outside-btn' >
                    <img src={investigación} />
                    <h2 >Ver más</h2>
                    <h3>Investigación y Desarrollo</h3>
                </button>
            </Link>
            <Link to={'/ASUNTOS'}>
                <button className='outside-btn' >
                    <img src={asuntos} />
                    <h2 >Ver más</h2>
                    <h3>Mi universidad, mi ciudad</h3>
                </button>
            </Link>
            <Link to={'/VIDAU'}>
                <button className='outside-btn'  >
                    <img src={vidau} />
                    <h2 >Ver más</h2>
                    <h3>Vida Estudiantil</h3>
                </button>
            </Link>
            <Link to={'/EVENTOS'}>
                <button className='outside-btn'  >
                    <img src={evento} />
                    <h2 >Ver más</h2>
                    <h3>Eventos y Actividades</h3>
                </button>
            </Link>

            <Link to={'/ENTREVISTA'}>

                <button className='outside-btn' >
                    <img src={entrevista} />
                    <h2 >Ver más</h2>
                    <h3>Entrevistas y Perfiles</h3>
                </button>
            </Link>
            <Link>
                <button className='outside-btn' onClick={() => navigateTecnologia('/TECNOLOGIA')} >
                    <img onClick={() => navigateEntrevista('/TECNOLOGIA')} src={tecnologia} />
                    <h2 >Ver más</h2>
                    <h3>Tecnología</h3>
                </button>
            </Link>

        </div >
    )
}

export default Columns