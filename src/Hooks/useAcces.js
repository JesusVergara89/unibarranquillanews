import axios from 'axios';
import { useEffect, useState } from 'react'


const useAccess = () => {
    const [access, setAccess] = useState()
    useEffect(() => {
        const URL = import.meta.env.VITE_URL_ACCESSPOINTS
        axios.get(URL)
            .then(({ data }) => setAccess(data))
            .catch(err => console.log(err))
    }, [])
    return access
}

export default useAccess


