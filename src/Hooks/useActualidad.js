import axios from "axios"
import { useEffect, useState } from "react"

const useActualidad = () => {
    const [update, setUpdate] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbwIfglc7GouupIaO8LRhJLbmYymWWGbmmar4LmiaMbdPnIYhm54lDjS6zdgT0oyqHYS/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setUpdate(data))
            .catch(err => console.log(err))
    }, [])
    return update
}

export default useActualidad