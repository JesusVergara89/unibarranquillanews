import React, { useEffect } from 'react'
import useSeccion from '../Hooks/useSeccion';
import CardSeccion from './CardSeccion';
import { useParams } from 'react-router-dom';

const Seccion = () => {
    const { update, status, search, Npages, setsearch,setNpages } = useSeccion()
    let { Seccion } = useParams()
    useEffect(() => {
        setsearch(undefined)
        setNpages(undefined)
    }, [Seccion])

    return (
        <article className='section-main'>
            <CardSeccion Npages={Npages} datataToShare={update} dataStatus={status} dataTitle={search?.Title} dataDescription={search?.Descripcion} URL={search?.Name} />
        </article>
    )
}

export default Seccion