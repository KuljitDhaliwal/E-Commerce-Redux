import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import { Button } from '../Utils/button'

function Product() {
    const {sku} = useParams()
    const [productDetails, setProductDetails] = useState()
    const {data, loading, error} = useFetch(`${import.meta.env.VITE_API_URL}/${sku}`)
    console.log('Data', data)
    useEffect(()=>{
        if(data){
            setProductDetails(data)
        }
    }, [data])
    console.log('ProductDetails', productDetails)
    // const allProducts = useSelector((state) => state.products.allProducts)
    // const product = useSelector((state) => state.products.product)
    // const [productDetails, setProductDetails] = useState([])
    // useEffect(() => {
    //     if (allProducts?.data && product) {
    //         const prod = allProducts.data.find(item => item.id === product)
    //         console.log('Prod', prod)
    //         setProductDetails([prod])
    //     }
    // }, [product])
    return (
        <div className='flex min-h-[calc(100vh_-_80px)] justify-center w-full px-20'>
                 <div className="flex mt-[80px] gap-10">
                    <div>
                        <img src={productDetails?.data?.image_path} alt="" className='h-[600px]'/>
                    </div>
                    <div className='details max-w-[600px]'>
                        <p className='text-3xl font-semibold'>{productDetails?.data?.name}</p>
                        <p className='text-2xl font-semibold'>{productDetails?.data?.price}</p>
                        <p className='my-5'>{productDetails?.data?.description}</p>
                        <Button className={'mt-5'}>Add to Cart</Button>
                    </div>
                </div>
        </div>
    )
}

export default Product