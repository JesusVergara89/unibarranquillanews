import axios from "axios"
import { useEffect, useState } from "react"

const useSport = () => {
    const [sports, setSport] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbzBjeIQjh2-tFIYrbC7DoUVVRoqmYLToMIRVnpAXmV_vRV6YZKzANoYDKldGvKHRIT4mA/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setSport(data))
            .catch(err => console.log(err))
    }, [])
    return sports
}

export default useSport