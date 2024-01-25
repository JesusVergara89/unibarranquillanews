import axios from "axios"
import { useEffect, useState } from "react"

const useEventos = () => {
    const [eventos, setEventos] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbwUOXtHZES396npyUuAl-PgECI-HHr1_SHlu-gzcMSd6Fn3SG9BovCL9ua1GycVQmwz/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setEventos(data))
            .catch(err => console.log(err))
    }, [])
    return eventos
}

export default useEventos