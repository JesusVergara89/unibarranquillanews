import axios from "axios"
import { useEffect, useState } from "react"

const useCulture = () => {
    const [culture, setCulture] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycby5a8ac1xTM5KivIjtq0-q2v7iPBHEvhxUG-KLr6EhNhGatVUhg3kao7bUjPCODmVZQ/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setCulture(data))
            .catch(err => console.log(err))
    }, [])
    return culture
}

export default useCulture