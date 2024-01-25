import axios from "axios"
import { useEffect, useState } from "react"

const useSport = () => {
    const [sports, setSport] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbz1Ou5OyJLkHvj2q9mUm7fJzm6s2udphvnhFrqNBEscSpiCmwXFAVsG8XB4nAKcdN4pwQ/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setSport(data))
            .catch(err => console.log(err))
    }, [])
    return sports
}

export default useSport