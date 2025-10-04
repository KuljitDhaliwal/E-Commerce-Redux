import React from 'react'
import AllProducts from '../Components/AllProducts'
import Filters from '../Components/Filters'

function Products() {
  return (
    <div className='flex md:flex-row flex-col w-full h-auto min-h-screen'>
        <div className="md:w-[25%] w-full sticky top-[80px] z-9 self-start">
            <Filters/>
        </div>
        <div className="md:w-[75%] w-full">
            <AllProducts/>
        </div>
    </div>
  )
}

export default Products