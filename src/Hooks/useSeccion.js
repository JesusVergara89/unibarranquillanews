import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
const useSeccion = () => {
    const [update, setUpdate] = useState()
    const [status, setstatus] = useState()
    let { Seccion = '', Id = '' } = useParams()
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        const URL = `https://script.google.com/macros/s/AKfycbw_WKm1FrAp1bwqftoWFBStAwiqVBszbA4ypbTMyk0hiAP2fLigdQWwVwvSmrWvOTGN/exec?seccion=${Seccion}&id=${Id}`
        setUpdate(undefined)
        setstatus(undefined)
        scrollToTop()
        axios.get(URL)
            .then(({ data }) => {
                setUpdate(data.data)
                setstatus(data.status)
            })
            .catch(err => console.log(err))
    }, [Seccion, Id])

    return { update, status }
}

export default useSeccion