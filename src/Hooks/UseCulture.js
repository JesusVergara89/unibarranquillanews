import axios from "axios"
import { useEffect, useState } from "react"

const useCulture = () => {
    const [culture, setCulture] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbzqOEq-B6-pufWKykekJJYtd9uJIThLicA5JCBF2GZ7LByvWaiM4o7w_Q6BUkcULGo/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setCulture(data))
            .catch(err => console.log(err))
    }, [])
    return culture
}

export default useCulture