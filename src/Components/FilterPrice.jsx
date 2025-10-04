import React from 'react'
import { useDispatch } from 'react-redux'
import {getPrice} from '../Store/Slices/AllProducts'

function FilterPrice({startRef, lastRef}) {
    const dispatch = useDispatch()
  return (
    <div className='flex gap-5 items-center'>
        <div className='flex gap-2 items-center'>$ <input type="text" name="" id="start" ref={startRef} onChange={(e)=> dispatch(getPrice({id: e.target.id, price: e.target.value}))} className='border-[1px] border-gray-400 rounded p-2 w-full' placeholder='0' /></div>
        <div className='flex gap-2 items-center'>$ <input type="text" name="" id="last" ref={lastRef} onChange={(e)=> dispatch(getPrice({id: e.target.id, price: e.target.value}))} className='border-[1px] border-gray-400 rounded p-2 w-full' placeholder='20'/></div>
    </div>
  )
}

export default FilterPrice