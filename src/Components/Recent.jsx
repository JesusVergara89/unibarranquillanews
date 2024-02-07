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
import useTecnologia from '../Hooks/useTecnologia';
import Carrusel from './Carrusel';
const Recent = () => {
    const [data, setData] = useState(null);
    const actualidad = useActualidad();
    const entrevista = useEntrevista();
    const eventos = useEventos();
    const researchs = useResearch();
    const culture = useCulture();
    const sports = useSport();
    const vidas = useVida();
    const asuntos = useAsuntos();
    const tecnologias = useTecnologia()

    const openUrl = (url) => {
        window.open(url, '_blank');
    };

    useEffect(() => {
        if (actualidad && asuntos && entrevista && eventos && researchs && culture && sports && vidas && tecnologias) {
            setData([actualidad[0], asuntos[0], entrevista[0], eventos[0], researchs[0], culture[0], sports[0], vidas[0], tecnologias[0]]);
        }
    }, [actualidad, asuntos, entrevista, eventos, researchs, culture, sports, vidas, tecnologias]);

    return (
        <article className="Recent-news">
            <h2>Artículos más recientes</h2>
            {data ? (
                <Carrusel data={data} />
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
