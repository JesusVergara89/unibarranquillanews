import axios from "axios"
import { useEffect, useState } from "react"

const useCulture = () => {
    const [culture, setCulture] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbymRjFy-ioSfC5YjSC87S2LID9CfLhkZgOGBdj6oynHghmqLlb0XYqUqvl5F2OLJuDM4g/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setCulture(data))
            .catch(err => console.log(err))
    }, [])
    return culture
}

export default useCulture