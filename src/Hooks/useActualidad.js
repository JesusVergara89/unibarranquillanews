import axios from "axios"
import { useEffect, useState } from "react"

const useActualidad = () => {
    const [update, setUpdate] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycby3kSZq3PsmAb2eZ2sx1Q4nTc9MpfV--ylcijQji2ptGO7ZpbTXhFhbcdlq8cjykSMkpA/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setUpdate(data))
            .catch(err => console.log(err))
    }, [])
    return update
}

export default useActualidad