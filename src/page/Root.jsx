import React, { useState } from 'react'
import TopNav from '../component/TopNav'
import SideNav from '../component/SideNav'
import Home from './Home';

function Root() {
    const [nav ,setNav]=useState(true);
  return (
    <div>
        <div className='flex w-full'>
        <div className='w-[15%] h-screen bg-black text-white'>
                <SideNav/>
            </div>
            <div className='w-[90%] h-[40px] text-white'>
            <TopNav/>
            <div className='text-black'>
             <Home/>
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default Root