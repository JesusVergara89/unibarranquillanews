import axios from "axios"
import { useEffect, useState } from "react"

const useEventos = () => {
    const [eventos, setEventos] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbzakK3jjaDV4XFtV8niAdK11gDhI9WCPZibgp8cLxbkVZtK2IKjopFx3WEztzGhS3QvXA/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setEventos(data))
            .catch(err => console.log(err))
    }, [])
    return eventos
}

export default useEventos