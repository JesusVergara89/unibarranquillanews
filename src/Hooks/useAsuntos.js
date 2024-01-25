import axios from "axios"
import { useEffect, useState } from "react"

const useAsuntos = () => {
    const [asuntos, setAsunto] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbyjD-GnoKndaTKD6je54kYGLLig0p5YPrS6RTetjyrNKChpG0N27VYueoRh1P135aE/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setAsunto(data))
            .catch(err => console.log(err))
    }, [])
    return asuntos
}

export default useAsuntos