import axios from "axios"
import { useEffect, useState } from "react"

const useActualidad = () => {
    const [update, setUpdate] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbzzqynLDUsNRi1cgYw29-RGyjh8BauFAHTnFMe2Tl1oTykp_AxzBk5mmUnh_BEtg1hGSw/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setUpdate(data))
            .catch(err => console.log(err))
    }, [])
    return update
}

export default useActualidad