import axios from "axios"
import { useEffect, useState } from "react"

const useAsuntos = () => {
    const [asuntos, setAsunto] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbwMmjawk_E3TBDBIY8JRl8eENlC872yx4OjchKo1BqPlp_Yaw3FPO2IqdjpXG6hddQ1Lw/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setAsunto(data))
            .catch(err => console.log(err))
    }, [])
    return asuntos
}

export default useAsuntos