import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import { Button } from '../Utils/button'
import { CiHeart } from "react-icons/ci";
import Quantity from '../Components/Quantity'
import { addCart, handleDecrement, handleIncrement } from '../Store/Slices/AllProducts'
function Product() {
    const {sku} = useParams()
    const quantity = useSelector((state)=> state.products.quantity)
    const [productDetails, setProductDetails] = useState()
    const {data, loading, error} = useFetch(`${import.meta.env.VITE_API_URL}/${sku}`)
    useEffect(()=>{
        if(data){
            setProductDetails(data)
        }
    }, [data])
    const dispatch = useDispatch()
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
                        <p className='text-2xl font-semibold'>${productDetails?.data?.price}</p>
                        <p className='my-5'>{productDetails?.data?.description}</p>
                        <Quantity quantity={quantity} increment={()=> dispatch(handleIncrement())} decrement={()=>dispatch(handleDecrement())}/>
                        <div className='flex gap-5'>
                            <Button className={'mt-5'} onClick={()=> dispatch(addCart(productDetails?.data?.id))}>Add to Cart</Button>
                            <Button className={'bg-blue-500 mt-5 hover:bg-blue-700'}><CiHeart className='text-2xl'/></Button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Product