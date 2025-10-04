import React from 'react'
import { Button } from '../Utils/button'

function Hero() {
  return (
    <div className='w-full h-[calc(100vh_-_80px)] flex items-center justify-center'>
        <div className='w-[50%] text-center grid md:gap-5 gap-4 relative z-2'>
            <p className='uppercase'>special offer</p>
            <p className='lg:text-8xl md:text-6xl text-4xl'>Premium Furnitures</p>
            <p className='uppercase'>flat 50% off</p>
            <Button children={"Shop Now"}/>
        </div>
        <div className='w-[50%] flex justify-center'>
            <img src="/Images/furniture.png" alt="" className='h-full drop-shadow-2xl relative z-1'/>
        </div>
    </div>  
  )
}

export default Hero