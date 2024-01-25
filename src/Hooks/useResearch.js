import axios from "axios"
import { useEffect, useState } from "react"

const useResearch = () => {
    const [research, setResearch] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbzzes9QdayBEhJEjArrwXfLoQkR_1P2byWpddM3RslcGiFKfc5MTuBEWBiCjwyCKpAp/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setResearch(data))
            .catch(err => console.log(err))
    }, [])
    return research
}

export default useResearch