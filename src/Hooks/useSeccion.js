import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
const useSeccion = () => {
    const [update, setUpdate] = useState()
    const [status, setstatus] = useState()
    const [search, setsearch] = useState()
    const [Npages, setNpages] = useState()
    let { Seccion = '', Id = '', Pagina } = useParams()
    let space = Seccion.replace("-", " ")
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const URL = `https://script.google.com/macros/s/AKfycbw_WKm1FrAp1bwqftoWFBStAwiqVBszbA4ypbTMyk0hiAP2fLigdQWwVwvSmrWvOTGN/exec?seccion=${space}&id=${Id}&pages=${Pagina}`
        setUpdate(undefined)
        scrollToTop()
        axios.get(URL)
            .then(({ data }) => {
                setNpages(data.numeropages)
                setUpdate(data.data)
                setstatus(data.status)
                setsearch(data.descripcion[0])
            })
            .catch(err => console.log(err))
    }, [Seccion, Id, Pagina])

    return { update, status, search, Npages, setsearch, setNpages }
}

export default useSeccion