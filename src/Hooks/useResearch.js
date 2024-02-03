import axios from "axios"
import { useEffect, useState } from "react"

const useResearch = () => {
    const [research, setResearch] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbwjHX0W0ZoPbRLwfGB56Y25ttt7loJTlTOwsrzrDzAYDd8gaRoKBTgFyBeqzCsOUId99g/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setResearch(data))
            .catch(err => console.log(err))
    }, [])
    return research
}

export default useResearch