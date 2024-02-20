import React from 'react'
import Loading from './Loading'
import '../Styles/cardseccion.css'
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from './NotFound';
const CardSeccion = ({ datataToShare, dataStatus, dataTitle, dataDescription }) => {
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
                : < Loading />


            }
        </>
    )
}

export default CardSeccion