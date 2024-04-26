import axios from 'axios';
import { useEffect, useState } from 'react'


const useOpen = () => {
    const [opens, setOpens] = useState()
    useEffect(() => {
        const URL = import.meta.env.VITE_URL_POSSITIONS
        axios.get(URL)
            .then(({ data }) => setOpens(data))
            .catch(err => console.log(err))
    }, [])
    return opens
}

export default useOpen
