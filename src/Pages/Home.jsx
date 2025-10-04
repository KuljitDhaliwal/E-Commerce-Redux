import React from 'react'
import Hero from '../Components/Hero'
import Carousel from '../Components/Carousel'
import { Button } from '../Utils/button'
import ProductCategory from '../Components/ProductCategory'
import { IoLogoInstagram } from "react-icons/io5";

function Home() {
  const unsplashPages = [
    "https://plus.unsplash.com/premium_photo-1671269942393-ab3372a09ce9?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",   // cozy living room (armchair + sofa). :contentReference[oaicite:0]{index=0}
    "https://plus.unsplash.com/premium_photo-1683131410166-c5a86e0763e8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",   // elegant living room with neutral tones. :contentReference[oaicite:1]{index=1}
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",   // modern chair + lamp lit by sunlight. :contentReference[oaicite:2]{index=2}
    "https://plus.unsplash.com/premium_photo-1690971631383-326a8b5d8ed7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",   // living room with lots of furniture. :contentReference[oaicite:3]{index=3}
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    // living room (couch + table + chairs). :contentReference[oaicite:4]{index=4}
  ]
  
  return (
    <div>
        <Hero/>
        <div className="flex md:flex-row flex-col py-20 justify-evenly items-center h-full">
          <div className='md:w-[50%] w-full flex justify-center'>
            <Carousel/>
          </div>
          <div className='md:w-[50%] w-full h-full flex justify-center'>
            <div className="card flex items-center bg-[#e6f6e8] px-20">
              <div className="card-text text-center text-white">
                <p className='text-4xl'>Single Chair</p>
                <p>15% OFF</p>
              </div>
              <img src="/Images/chair.png" alt="" className='h-[365px] drop-shadow-2xl'/>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-evenly items-center h-full">
          <div className='md:w-[50%] w-full h-full flex justify-center'>
            <div className="card flex items-center bg-[#c5d0d1] px-20">
              <div className="card-text text-center text-white">
                <p className='text-4xl'>Single Chair</p>
                <p>15% OFF</p>
              </div>
              <img src="/Images/chair.png" alt="" className='h-[365px] drop-shadow-2xl'/>
            </div>
          </div>
          <div className='md:w-[50%] w-full flex justify-center'>
            <Carousel/>
          </div>
        </div>
        <div className="eligent w-full flex md:flex-row flex-col bg-[#e6f6e8] mt-10">
          <div className='md:w-[50%] w-full flex justify-center'>
            <img src="/Images/yellow-chair.webp" alt="" className='h-full drop-shadow-2xl'/>
          </div>
          <div className='md:w-[50%] w-full flex justify-center items-center'>
            <div className="text p-10">
              <p className='md:text-7xl text-4xl'>Irresistibly Amazing Furniture</p>
              <p className='md:text-xl py-5'>Find an idea that suits your taste with our great selection of hanging systems,
              floor lamps and table lamps.</p>
              <Button children={"Shop Now"}/>
            </div>
          </div>
        </div>
        {/* <AllProducts/> */}
        <ProductCategory/>
        <div className="insta py-10">
          <p className='border-b-[1px] border-orange-400 text-2xl uppercase w-fit m-auto'>Auraro On Instagram</p>
          <p className='text-orange-400 text-center my-5'>@auraro</p>
          <div className="flex flex-wrap justify-center gap-5">
            {unsplashPages.map((url, index)=>{
             return <div className="insta-card w-[18rem] overflow-hidden group relative">
                <img src={`${url}`} alt={`furnitureImage${index}`} className='h-full group-hover:scale-125 transition-all duration-300 ' />
                <div className="absolute w-full h-full z-2 bg-black/50 left-0 top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                  <IoLogoInstagram className='text-4xl text-white'/>
                </div>
             </div> 
            })}
          </div>
        </div>
    </div>
  )
}

export default Home