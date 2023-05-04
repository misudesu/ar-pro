import React from 'react'
import amulogo from '../Asset/amulogo.png'
function Footer() {
  return (
    <div>
        <footer className='h-[115px] flex gap-8 text-white  items-center bg-[#111111]'>
            <img src={amulogo} className='rounded-full w-[50px] h-[50px] mr-[127px] ml-[115px]' alt="" />
            <p className='text-[20px]'>Copyright © 2023 AMU International University of Applied Sciences - All rights reserved</p>
        </footer>
    </div>
  )
}

export default Footer