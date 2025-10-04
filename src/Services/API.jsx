import React,{ useEffect } from 'react'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { setAllProducts } from '../Store/Slices/AllProducts'
function API() {
  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(`${import.meta.env.VITE_API_URL}`)
  useEffect(()=>{
    if(data){
      dispatch(setAllProducts(data))
    }
  },[data, dispatch])
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return null
}

export default API
