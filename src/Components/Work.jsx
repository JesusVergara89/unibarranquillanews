import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import '../Styles/Workus.css'
import Loading from './Loading'
import axios from 'axios'
import dayjs from 'dayjs';
import 'dayjs/locale/es'
const Work = () => {
    const URLS = "OPENPOSSITIONS"
    const [datawork, setdatawork] = useState()
    const [statuswork, setstatuswork] = useState()
    useEffect(() => {
        const URL = `https://script.google.com/macros/s/AKfycbw_WKm1FrAp1bwqftoWFBStAwiqVBszbA4ypbTMyk0hiAP2fLigdQWwVwvSmrWvOTGN/exec?seccion=${URLS}`
        scrollToTop()
        axios.get(URL)
            .then(({ data }) => {
                setdatawork(data.data)
                setstatuswork(data.status)
            })
            .catch(err => console.log(err))
        scrollToTop()
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    dayjs.locale('es')
    return (
        <article className='work'>
            <Helmet>
                <title>Trabaja con nosotros</title>
                <meta name="description" content={'Sección donde se encuentra publicada las ofertas laborales'} />
                <meta property="og:title" content={'Trabaja con nosotros'} />
                <meta property="og:description" content={'Sección donde se encuentra publicada las ofertas laborales'} />
                <meta property="og:site_name" content="Unibarranquilla Newspaper" />
                <meta property="og:image" content={'https://unibarranquilla-newspaper.netlify.app/assets/entrevista-JZNcz7B_.jpg'} />
                <meta property="og:image:url" content={'https://unibarranquilla-newspaper.netlify.app/assets/entrevista-JZNcz7B_.jpg'} />
                <meta property="og:imagen:width" content="200" />
                <meta property="og:imagen:height" content="200" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={'https://unibarranquilla-newspaper.netlify.app/OPENPOSSITIONS'} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:site" content="@Unibarranquilla Newspaper" />
                <meta property="twitter:title" content={'Trabaja con nosotros'} />
                <meta property="twitter:description" content={'Sección donde se encuentra publicada las ofertas laborales'} />
                <meta property="twitter:image" content={'https://unibarranquilla-newspaper.netlify.app/assets/entrevista-JZNcz7B_.jpg'} />
            </Helmet>
            <div className="visualization-div-header"></div>
            <h2>Trabaja con nosotros</h2>
            {statuswork === 'failed' ? <NotFound /> : datawork ? (
                <div className="container-openposition">
                    {datawork.map((open, i) => (
                        <div className="openposition" key={i}>
                            <h3>{open.Name}</h3>
                            <h5 className='open-parrafo'>
                                {open.Description.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </h5>
                            <div className="open-dates">
                                <h4>{`Fecha: ${dayjs(open.Von).format("D MMM, YYYY")} - ${dayjs(open.Bis).format("D MMM, YYYY")}`}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            ) : <>
                <Helmet>
                    <title>Cargando...</title>
                </Helmet>
                <Loading />
            </>
            }
        </article>
    )
}

export default Work