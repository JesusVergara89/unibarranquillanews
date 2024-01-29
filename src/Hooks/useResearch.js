import axios from "axios"
import { useEffect, useState } from "react"

const useResearch = () => {
    const [research, setResearch] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbzhxeVJndQCuYwvDJsek2ig8aOSdtAVK_XoD1vy07SCdk4DnDCYxrNyRnUgz-jPwomSMQ/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setResearch(data))
            .catch(err => console.log(err))
    }, [])
    return research
}

export default useResearch