import axios from "axios"
import { useEffect, useState } from "react"

const useSport = () => {
    const [sports, setSport] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbzzTvnejTiuTg9F5ebTW2NEBl5cTBXguVfuEzWu_8F3SO0VApsuPtRTdzBl4Yy_zNiicA/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setSport(data))
            .catch(err => console.log(err))
    }, [])
    return sports
}

export default useSport