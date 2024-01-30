import axios from 'axios';
import { useEffect, useState } from 'react'


const useOpen = () => {
    const [opens, setOpens] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbz9h8mMDOe7OeBJ4QJVX3nJnr943On7eKBbqTdz5FEjc32L7UqDY9Pc9lRyRjsND9Dz/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setOpens(data))
            .catch(err => console.log(err))
    }, [])
    return opens
}

export default useOpen
