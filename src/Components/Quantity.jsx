import React from 'react'

function Quantity({quantity, increment, decrement}) {
  return (
    <div className='border-[1px] w-fit border-gray-300 rounded flex justify-center items-center'>
        <button type='button' disabled={quantity <= 1} className='border-0 px-3 py-1 cursor-pointer disabled:bg-[#cccccc] disabled:text-[#999999] active:bg-gray-200 disabled:cursor-not-allowed' onClick={decrement}>-</button>
            <p className='px-3'>{quantity}</p>
        <button type='button' className='border-0 px-3 py-1 cursor-pointer active:bg-gray-200' onClick={increment}>+</button>
    </div>
  )
}

export default Quantity