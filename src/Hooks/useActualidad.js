import axios from "axios"
import { useEffect, useState } from "react"

const useActualidad = () => {
    const [update, setUpdate] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbxkuxJgapqq_FVVkfWzHJ8dxT9U_nguR3kCLF0yfrz5VgoKK3rJqkLaOPa5i9wGEqdu/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setUpdate(data))
            .catch(err => console.log(err))
    }, [])
    return update
}

export default useActualidad