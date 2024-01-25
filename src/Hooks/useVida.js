import axios from "axios"
import { useEffect, useState } from "react"

const useVida = () =>  {
    const [vidas, setVidas] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbxJveCljMSJ6c-YZn9srGPyzLWKkyC25u4s7SQWLRDDfaI_DbvhJCdcJXqyj8eTQe9E/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setVidas(data))
            .catch(err => console.log(err))
    }, [])
    return vidas
}

export default useVida