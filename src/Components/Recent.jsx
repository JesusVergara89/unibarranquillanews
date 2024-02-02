import React, { useEffect, useState } from 'react';
import useActualidad from '../Hooks/useActualidad';
import Loading from './Loading';
import useEntrevista from '../Hooks/useEntrevista';
import useEventos from '../Hooks/useEventos';
import useCulture from '../Hooks/UseCulture';
import useSport from '../Hooks/useSport';
import useResearch from '../Hooks/useResearch';
import useVida from '../Hooks/useVida';
import useAsuntos from '../Hooks/useAsuntos';
import '../Styles/Recen.css';

const Recent = () => {
    const [data, setData] = useState(null); // Inicializar data como null

    const actualidad = useActualidad();
    const entrevista = useEntrevista();
    const eventos = useEventos();
    const researchs = useResearch();
    const culture = useCulture();
    const sports = useSport();
    const vidas = useVida();
    const asuntos = useAsuntos();

    useEffect(() => {

        if (actualidad && asuntos && entrevista && eventos && researchs && culture && sports && vidas) {

            setData([actualidad[0], asuntos[0], entrevista[0], eventos[0], researchs[0], culture[0], sports[0], vidas[0]]);
        }
    }, [actualidad, asuntos, entrevista, eventos, researchs, culture, sports, vidas]);

    return (
        <article className="Recent-news">
            <h2>Artículos más recientes</h2>
            {data ? (
                <div className="recent-news-main">
                    {data.map((unit, i) => (
                        <div className="recent-news-card" key={i}>
                            <h3 className="recent-news-title">{unit.Title.slice(0, 60)}</h3>
                            <img src={unit.Pic} alt="" className="recent-news-img" />
                            <button className="recen-btn">
                                <a href={unit.Link} target="_blank" rel="noopener noreferrer">ver</a>
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <Loading />
            )}

            <h4>
                Nuestras secciones
            </h4>
        </article>
    );
};

export default Recent;
