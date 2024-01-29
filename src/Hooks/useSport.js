import axios from "axios"
import { useEffect, useState } from "react"

const useSport = () => {
    const [sports, setSport] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbycGHaFiaC5MLppABRjz1M6obKBDUpPOcR6kCMTrtooZI6pC5V2r_5s8vzSRVuhef-MsA/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setSport(data))
            .catch(err => console.log(err))
    }, [])
    return sports
}

export default useSport