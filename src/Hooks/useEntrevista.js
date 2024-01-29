import axios from 'axios';
import { useEffect, useState } from 'react'


const useEntrevista = () => {
    const [entrevista, setEntrevista] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycby64WFc-nzuBheWiBRFyXL4gI7kN3YX_U-OBZLi4l-RJv9NPUQC_1i2GhRTV9y1FNGV/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setEntrevista(data))
            .catch(err => console.log(err))
    }, [])
    return entrevista
}

export default useEntrevista
