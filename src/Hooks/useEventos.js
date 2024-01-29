import axios from "axios"
import { useEffect, useState } from "react"

const useEventos = () => {
    const [eventos, setEventos] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbwB6gcI_8jShofnqu5H8C6BdHboed8K3reO_I1_LQKNEE-WElGlwieMmked9jzAudw_ag/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setEventos(data))
            .catch(err => console.log(err))
    }, [])
    return eventos
}

export default useEventos