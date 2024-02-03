import axios from "axios"
import { useEffect, useState } from "react"

const useCulture = () => {
    const [culture, setCulture] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbyGLqMVU9qrPnWIggZnxFSV45Sc57vGa65ZAC3Ak6malySehrVf71T94Be67T4_xIkV/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setCulture(data))
            .catch(err => console.log(err))
    }, [])
    return culture
}

export default useCulture