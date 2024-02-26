import axios from 'axios';
import { useEffect, useState } from 'react'


const useRecents = () => {
    const [recent, setRecent] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbySaqTyIRIJuimYbQJTQBRsEYQao1g2ntUjUV13yO8l-3iocbacGw-SH5-Q20NyDSAn/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setRecent(data))
            .catch(err => console.log(err))
    }, [])
    return recent
}

export default useRecents
