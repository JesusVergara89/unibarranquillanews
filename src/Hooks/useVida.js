import axios from "axios"
import { useEffect, useState } from "react"

const useVida = () =>  {
    const [vidas, setVidas] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbxM4JXRIpze7_lr7kKmzrqByWEBZaL7_aQ8KPwgUZf-78cFsHRagzIrISJCEKErlJ_vEw/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setVidas(data))
            .catch(err => console.log(err))
    }, [])
    return vidas
}

export default useVida