import axios from 'axios';
import { useEffect, useState } from 'react'


const useAccess = () => {
    const [access, setAccess] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbx6OjS01CPOxEGpAWL2QcK80TGVUpcV_5HYvSoohVAbg7NBuXqT-mmr9IK3KrvUxy7smA/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setAccess(data))
            .catch(err => console.log(err))
    }, [])
    return access
}

export default useAccess
