import axios from "axios"
import { useEffect, useState } from "react"

const useAsuntos = () => {
    const [asuntos, setAsunto] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbzCagQpJEsDJo1RxyDV6S4lKCMHQktm6ZuXEGtdvmojK3L89SspI6xHYzvjJ4yvK7_B3A/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setAsunto(data))
            .catch(err => console.log(err))
    }, [])
    return asuntos
}

export default useAsuntos