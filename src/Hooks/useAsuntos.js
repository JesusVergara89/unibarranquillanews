import axios from "axios"
import { useEffect, useState } from "react"

const useAsuntos = () => {
    const [asuntos, setAsunto] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbx2vcNs-OJ84F14YLtnQ562AvT4P8mQxp-XuhwTya8OGBenGAA5CkmxuSMsWfG0Hk3IwA/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setAsunto(data))
            .catch(err => console.log(err))
    }, [])
    return asuntos
}

export default useAsuntos