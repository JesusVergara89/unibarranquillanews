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

/**
 * Component displaying the most recent articles from various sections.
 * Uses sliders to showcase the articles.
 * @returns {JSX.Element} Recent component JSX
 */
const Recent = () => {
    const [data, setData] = useState(null);

    // Custom hooks to fetch data for various sections
    const actualidad = useActualidad();
    const entrevista = useEntrevista();
    const eventos = useEventos();
    const researchs = useResearch();
    const culture = useCulture();
    const sports = useSport();
    const vidas = useVida();
    const asuntos = useAsuntos();

    // Settings for the slider
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    // Function to open the article URL in a new tab
    const openUrl = (url) => {
        window.open(url, '_blank');
    };

    // useEffect to set data once all data from different sections are fetched
    useEffect(() => {
        if (actualidad && asuntos && entrevista && eventos && researchs && culture && sports && vidas) {
            setData([actualidad[0], asuntos[0], entrevista[0], eventos[0], researchs[0], culture[0], sports[0], vidas[0]]);
        }
    }, [actualidad, asuntos, entrevista, eventos, researchs, culture, sports, vidas]);

    return (
        <article className="Recent-news">
            <h2>Most Recent Articles</h2>
            {data ? (
                <Slider className="recent-news-slider" {...settings}>
                    {data.map((unit, i) => (
                        <div onClick={() => openUrl(unit.interLink)} className="recent-news-card" key={i}>
                            <h3 className="recent-news-title">{unit.Title.slice(0, 60)}</h3>
                            <img src={unit.Pic} alt="" className="recent-news-img" />
                            <button onClick={() => openUrl(unit.interLink)} className="recen-btn">
                                <a href={unit.interLink} target="_blank" rel="noopener noreferrer">view</a>
                            </button>
                        </div>
                    ))}
                </Slider>
            ) : (
                <Loading />
            )}

            <h4>
                Our Sections
            </h4>
        </article>
    );
};

export default Recent;
