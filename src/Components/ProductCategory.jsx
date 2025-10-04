import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

function ProductCategory() {
    const allProducts = useSelector((state)=> state.products.allProducts)
    const [category, setCategory] = useState()
    useEffect(()=>{
        let categories = allProducts?.data?.filter((item)=> item.price < 50)
        setCategory(categories)
    },[allProducts])
  return (
    <div>
        <p className='border-b-[1px] border-orange-400 text-2xl uppercase w-fit m-auto my-10'>Trending</p>
        <div className='flex w-full justify-center lg:gap-20 flex-wrap'>
            {category && category.map((item)=>{
                return <ProductCard className={'shrink'} image={item.image_path} price={item.price} brand={item.name}/>
            })}
        </div>
    </div>
  )
}

export default ProductCategory