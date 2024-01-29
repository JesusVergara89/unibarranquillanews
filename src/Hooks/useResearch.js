import axios from "axios"
import { useEffect, useState } from "react"

const useResearch = () => {
    const [research, setResearch] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbx-00WXJxJhT8W3f81paqdu9EPBdPA0sZQFJyGCNpviTnigLEVyWUEWF7urKaQ9BdQk/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setResearch(data))
            .catch(err => console.log(err))
    }, [])
    return research
}

export default useResearch