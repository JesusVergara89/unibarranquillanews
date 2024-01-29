import axios from 'axios';
import { useEffect, useState } from 'react'


const useEntrevista = () => {
    const [entrevista, setEntrevista] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbzJ0LeLR-esXmg9M19Z5IqwaI8yGEKNssV4wx-h7wJYQXvEMK1EIaUVgFVEg-Am4E4t/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setEntrevista(data))
            .catch(err => console.log(err))
    }, [])
    return entrevista
}

export default useEntrevista
