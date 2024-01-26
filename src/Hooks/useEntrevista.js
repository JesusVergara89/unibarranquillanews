import axios from 'axios';
import { useEffect, useState } from 'react'


const useEntrevista = () => {
    const [entrevista, setEntrevista] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycby93NwVFeMVKIeKpfdLbKGoG8uPv3OmAh2tpja2hiwF65ZQsTvfYNhK0iNKXzliphlLiA/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setEntrevista(data))
            .catch(err => console.log(err))
    }, [])
    return entrevista
}

export default useEntrevista
