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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useTecnologia from '../Hooks/useTecnologia';

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

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
        centerMode: true,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

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
                <Slider className="recent-news-slider" {...settings}>
                    {data.map((unit, i) => (
                        <div onClick={() => openUrl(unit.interLink)} className="recent-news-card" key={i}>
                            <h3 className="recent-news-title">{unit.Title.slice(0, 100)}</h3>
                            <img src={unit.Pic} alt="" className="recent-news-img" />
                            <button onClick={() => openUrl(unit.interLink)} className="recen-btn">
                                <a href={unit.interLink} target="_blank" rel="noopener noreferrer">ver</a>
                            </button>
                        </div>
                    ))}
                </Slider>
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
