import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

function Carousel() {
  const allProducts = useSelector((state) => state.products.allProducts)
  const [woodTypes, setWoodTypes] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setWoodTypes(allProducts?.data || [])
  }, [allProducts])

  useEffect(() => {
    if (!woodTypes.length) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % woodTypes.length) // infinite loop
    }, 3000)

    return () => clearInterval(interval)
  }, [woodTypes])

  return (
    <div className='w-[36rem] overflow-hidden'>
      <div
        className='flex transition-transform duration-500'
        style={{ transform: `translateX(-${currentIndex * 19}rem)` }} // dynamic inline style
      >
        {woodTypes.map((item, idx) => (
          <ProductCard
            key={idx}
            brand={item.name}
            price={item.price}
            image={item.image_path}
            className='shrink-0 w-[19rem]'
          />
        ))}
      </div>
      <div className='flex gap-1 justify-center mt-2'>
        {woodTypes.map((_, idx) => (
          <div
            key={idx}
            className={`h-3 w-3 rounded-full ${
              idx === currentIndex ? 'bg-[#4C7766]' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
