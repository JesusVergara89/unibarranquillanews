import axios from "axios"
import { useEffect, useState } from "react"

const useActualidad = () => {
    const [update, setUpdate] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbybQL93fNexmXDF7fr1N23YVq0q7SnLYXXW-TrrSxTqaJ2hrCzwf6Xm70LQtUFnDvXfnw/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setUpdate(data))
            .catch(err => console.log(err))
    }, [])
    return update
}

export default useActualidad