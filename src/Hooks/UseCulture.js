import axios from "axios"
import { useEffect, useState } from "react"

const useCulture = () => {
    const [culture, setCulture] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbxSx1jAhGSDdDsqQsqRdHmKjCy1ZKRiI_UFI7l47t2GNX8uDs71N7KbqW2mQMa7jNufjg/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setCulture(data))
            .catch(err => console.log(err))
    }, [])
    return culture
}

export default useCulture