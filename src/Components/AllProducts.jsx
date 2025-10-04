import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

function AllProducts() {
    const products = useSelector((state)=> state.products.allProducts)
    const filteredProduct = useSelector((state)=> state.products.filteredData)
  return (
    <div className='flex flex-wrap md:gap-10 gap-5 justify-center relative z-8'>
      {filteredProduct.length !== 0 && filteredProduct.map((item, key)=>{
            return <ProductCard key={key} image={item.image_path} price={item.price} sku={item.sku} brand={item.name} className={'shrink'}/>
      })}
      {filteredProduct.length === 0 && products?.data?.map((item, key)=>{
        return <ProductCard key={key} image={item.image_path} price={item.price} id={item.id} brand={item.name} sku={item.sku} className={'shrink'}/>
      })}
    </div> 
  )
}

export default AllProducts