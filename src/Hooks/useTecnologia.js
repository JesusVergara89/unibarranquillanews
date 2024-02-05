import axios from 'axios';
import { useEffect, useState } from 'react'


const useTecnologia = () => {
    const [tecnologias, setTecnologias] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbw_4H9ftRwUHhDt03qRgUCFEgmtNSuSObCYZwmbACJmCaSue_swYhVtzDlMH6kiErEr/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setTecnologias(data))
            .catch(err => console.log(err))
    }, [])
    return tecnologias
}

export default useTecnologia
