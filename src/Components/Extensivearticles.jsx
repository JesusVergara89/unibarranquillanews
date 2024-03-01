import React, {useState } from 'react';
import '../Styles/Extensivearticles.css';
import Componentform from './Formcreated/Componentform';

const Extensivearticles = ({IsLogged, setIsLogged }) => {
    const [off, setOff] = useState(true);
    const [actualidad, setActualidad] = useState(false);
    const [cultura, setCultura] = useState(false);
    const [deporte, setDeporte] = useState(false);
    const [investigacion, setInvestigacion] = useState(false);
    const [universidad, setUniversidad] = useState(false);
    const [vida, setVida] = useState(false);
    const [eventos, setEventos] = useState(false);
    const [entrevistas, setEntrevistas] = useState(false);
    const [tecnologia, setTecnlogia] = useState(false);

    const actualizarEstado = (estado, valor) => {
        setActualidad(estado === "actualidad" ? valor : false);
        setCultura(estado === "cultura" ? valor : false);
        setDeporte(estado === "deporte" ? valor : false);
        setInvestigacion(estado === "investigacion" ? valor : false);
        setUniversidad(estado === "universidad" ? valor : false);
        setVida(estado === "vida" ? valor : false);
        setEventos(estado === "eventos" ? valor : false);
        setEntrevistas(estado === "entrevistas" ? valor : false);
        setTecnlogia(estado === "tecnologia" ? valor : false);
        setOff(false);
    };

    return (
        <article className="extended-articles">

            {off && <h2 className='which-one'>Elige en cual sección quieres escribir el articulo</h2>}

            {off &&
                <div className="extent-btn">
                    <button onClick={() => actualizarEstado("actualidad", true)}>Actualidad</button>
                    <button onClick={() => actualizarEstado("cultura", true)}>Cultura</button>
                    <button onClick={() => actualizarEstado("deporte", true)}>Deporte</button>
                    <button onClick={() => actualizarEstado("investigacion", true)}>Investigación</button>
                    <button onClick={() => actualizarEstado("universidad", true)}>MiUni</button>
                    <button onClick={() => actualizarEstado("vida", true)}>Vida</button>
                    <button onClick={() => actualizarEstado("eventos", true)}>Eventos</button>
                    <button onClick={() => actualizarEstado("entrevistas", true)}>Entrevistas</button>
                    <button onClick={() => actualizarEstado("tecnologia", true)}>Tecnología</button>
                </div>
            }

            <div className="extended-article-tomake">

             <Componentform
             actualidad={actualidad}
             cultura={cultura}
             deporte={deporte}
             investigacion={investigacion}
             universidad={universidad}
             vida={vida}
             eventos={eventos}
             entrevistas={entrevistas}
             tecnologia={tecnologia}

             off={off}

             IsLogged={IsLogged}
             setIsLogged={setIsLogged}
             />

            </div>
        </article>
    );
};

export default Extensivearticles;
