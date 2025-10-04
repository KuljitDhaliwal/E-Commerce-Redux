import React, { useEffect, useState } from 'react'

function useFetch(URL) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
        let mounted = true
            const fetchData = async () => {
                try{
                    let response = await fetch(URL)
                    let data = await response.json()
                    if(mounted){setData(data)}
                }catch(error){
                    if(mounted){setError(error.message)}
                } finally{
                    if(mounted){setLoading(false)}
                }
            }
            fetchData()
            return () => mounted = false

    }, [URL])
  return {data, loading, error}
}

export default useFetch