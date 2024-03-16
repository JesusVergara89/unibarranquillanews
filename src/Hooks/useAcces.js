import axios from 'axios';
import { useEffect, useState } from 'react'


const useAccess = () => {
    const [access, setAccess] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbwUCZPYudh4N6OccDsLs5bwwuL_fEpgnHgL7YF53NXU0stMCVTnI8Wcm9uhk-sHQKAJ/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setAccess(data))
            .catch(err => console.log(err))
    }, [])
    return access
}

export default useAccess


