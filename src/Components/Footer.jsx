import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className='flex p-5 justify-evenly flex-wrap border-t-[1px] border-gray-200'>
            <p className='flex items-center gap-1'><FaRegCopyright /> Copyright 2025 | <span className='text-gray-300'>Auraro</span> By ShopiLaunch</p>
            <img src="/Images/paymet.png" alt="" className='h-full md:mt-0 mt-3'/>
    </footer>
  )
}

export default Footer