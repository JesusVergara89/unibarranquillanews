import React, { useEffect, useState } from 'react'
import '../Styles/cardseccion.css'
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import NotFound from './NotFound';
import { Helmet } from "react-helmet";
import Buttonpages from './Buttonpages';
import Cardloading from './Cardloading';
import Skeleton from 'react-loading-skeleton';
const CardSeccion = ({ datataToShare, dataStatus, dataTitle, dataDescription, URL, Npages }) => {
    let { Seccion, Pagina } = useParams()
    function Record(e) {
        let result
        if (e.length >= 120) {
            result = e.slice(0, 75) + ' ...'
        } else {
            result = e
        }
        return result
    }
    return (
        <>
            {dataStatus === 'failed' ? <NotFound /> : (
                <article className="section">
                    <section className='section-Header'>
                        {datataToShare ?
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
                                <meta property="og:url" content={`https://unibarranquilla-newspaper.netlify.app/#/${Seccion}/pages/${Pagina}`} />
                                <meta property="twitter:card" content="summary_large_image" />
                                <meta property="twitter:site" content="@Unibarranquilla Newspaper" />
                                <meta property="twitter:title" content={`${dataTitle} | NEWSPAPER`} />
                                <meta property="twitter:description" content={dataDescription} />
                                <meta property="twitter:image" content={URL} />
                            </Helmet>
                            :
                            <Helmet>
                                <title>Cargando...</title>
                            </Helmet>
                        }
                        <h2 className="title">{dataTitle || <Skeleton height={50} />}</h2>
                        <p className='description'>{dataDescription || <Skeleton height={80} />}</p>
                    </section>
                    <section className='section-cards'>
                        {Npages ?
                            <Buttonpages Npages={Npages} />
                            : <div className="pagination-controls">
                                <Skeleton height={40} />
                            </div>
                        }
                        {datataToShare ?
                            datataToShare.map((user, key) => (
                                <Link to={`/${Seccion}/${user.Id}`}>
                                    <div className='card' key={key}>
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
                                </Link>
                            )
                            )

                            : <Cardloading />}
                        {Npages ?
                            <Buttonpages Npages={Npages} />
                            : <div className="pagination-controls">
                                <Skeleton height={40} />
                            </div>
                        }
                    </section>
                </article>
            )
            }
        </>
    )
}

export default CardSeccion