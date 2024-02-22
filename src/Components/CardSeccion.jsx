import React from 'react'
import Loading from './Loading'
import '../Styles/cardseccion.css'
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from './NotFound';
import { Helmet } from "react-helmet";
const CardSeccion = ({ datataToShare, dataStatus, dataTitle, dataDescription, URL }) => {
    const navigate = useNavigate()
    let { Seccion } = useParams()
    function Record(e) {
        let result
        if (e.length >= 120) {
            result = e.slice(0, 75) + ' ...'
        } else {
            result = e
        }
        return result
    }
    function Navi(e) {
        navigate(`/${Seccion}/${e}`)
    }

    return (
        <>
            {dataStatus === 'failed' ? <NotFound /> : datataToShare ? (
                <article className="section">
                    <Helmet>
                        <title>{dataTitle} | NEWSPAPER</title>
                        <meta name="description" content={dataDescription} />
                        <meta property="og:title" content={`${dataTitle} | NEWSPAPER`} />
                        <meta property="og:description" content={dataDescription} />
                        <meta property="og:site_name" content="Unibarranquilla Newspaper" />
                        <meta property="og:image" content={URL} />
                        <meta property="og:image:url" content={URL} />
                        <meta property="og:imagen:width" content="200" />
                        <meta property="og:imagen:height" content="200" />
                        <meta property="og:type" content="article" />
                        <meta property="og:url" content={`https://unibarranquilla-newspaper.netlify.app/${Seccion}`} />
                        <meta property="twitter:card" content="summary_large_image" />
                        <meta property="twitter:site" content="@Unibarranquilla Newspaper" />
                        <meta property="twitter:title" content={`${dataTitle} | NEWSPAPER`} />
                        <meta property="twitter:description" content={dataDescription} />
                        <meta property="twitter:image" content={URL} />
                    </Helmet>

                    <section className='section-Header'>
                        <h2 className="title">{dataTitle}</h2>
                        <p className='description'>{dataDescription}</p>
                    </section>
                    <section className='section-cards'>
                        {datataToShare.map((user, key) => (
                            <div onClick={() => Navi(user.Id)} className='card' key={key}>
                                <div className='section-imagen'>
                                    <img src={user.Pic} alt="" />
                                </div>
                                <div className='section-text'>
                                    <p>
                                        {user.Editor}, {moment(user.Date).format("MMM D YYYY")}
                                    </p>
                                    <h2>
                                        {Record(user.Title)}
                                    </h2>
                                </div>
                            </div>
                        )
                        )}
                    </section>
                </article>
            )
                : <>
                    <Helmet>
                        <title>Cargando...</title>
                    </Helmet>
                    < Loading />
                </>


            }
        </>
    )
}

export default CardSeccion