import React,{ useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'

const Ruta = () => {
    let { Seccion } = useParams()
    const navigate = useNavigate()
    function Navi(e) {
        navigate(`/${e}/pages/1`)
    }
    useEffect(() => {
        Navi(Seccion)
    }, [Seccion])

    return (
        <Loading />
    )
}

export default Ruta