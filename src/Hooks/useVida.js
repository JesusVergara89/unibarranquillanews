import axios from "axios"
import { useEffect, useState } from "react"

const useVida = () =>  {
    const [vidas, setVidas] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbwpFCZyq9TRVlA6eX5hOWo3QzthaB5uoJ5tUHeyttYJoUynCpJdD8QU1PZJP45fIyX1/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setVidas(data))
            .catch(err => console.log(err))
    }, [])
    return vidas
}

export default useVida