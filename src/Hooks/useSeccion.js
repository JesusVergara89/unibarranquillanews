import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
const useSeccion = () => {
    const [update, setUpdate] = useState()
    let { Seccion, Id='' } = useParams()
    useEffect(() => {
        const URL = `https://script.google.com/macros/s/AKfycbzIUzLBhQd10QyiKsJhME0k5tIHV_-Ill_lKXawzMT5ff_z2Qc7yosqLxo5S3fczzkq/exec?seccion=${Seccion}&id=${Id}`
        setUpdate(undefined)
        axios.get(URL)
            .then(({ data }) => setUpdate(data.data))
            .catch(err => console.log(err))
    }, [Seccion, Id])

    return update
}

export default useSeccion