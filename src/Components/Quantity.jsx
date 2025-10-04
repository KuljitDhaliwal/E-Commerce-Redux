import React from 'react'

function Quantity() {
  return (
    <div className='border-[1px] w-fit border-gray-300 rounded flex justify-center items-center'>
        <button type='button' className='border-0 px-3 cursor-pointer'>-</button>
            <p className='px-3'>1</p>
        <button type='button' className='border-0 px-3 py-1 cursor-pointer'>+</button>
    </div>
  )
}

export default Quantity