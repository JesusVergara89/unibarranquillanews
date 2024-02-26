import axios from "axios"
import { useEffect, useState } from "react"

const useResearch = () => {
    const [research, setResearch] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbwv_JdN4JRfUoacRDyT3ylJOnWkUvfypqJw9CZeoK1Nz1Il-aSPnOmQIUds1FlhMWM0Ug/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setResearch(data))
            .catch(err => console.log(err))
    }, [])
    return research
}

export default useResearch