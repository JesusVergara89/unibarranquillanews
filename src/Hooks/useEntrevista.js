import axios from 'axios';
import { useEffect, useState } from 'react'


const useEntrevista = () => {
    const [entrevista, setEntrevista] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbxLBtz2bYNfUCRdvjBG-WjwjVPMkV1aMe-CtQHHStPiRl6qRRdPzUi7p138geraIC4I/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setEntrevista(data))
            .catch(err => console.log(err))
    }, [])
    return entrevista
}

export default useEntrevista
