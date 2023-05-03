import React from 'react'

function Service() {
  return (
    <div>
        <div>
            <div className='flex gap-[82px] jestify-around '>
<div className=' ml-[79px]'>
    <video autoplay loop muted controls className='w-[600px] h-[341px] rounded-[29px]' >
    <source
    src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4"
    type="video/mp4" />  
    </video>
</div>
<div className='text-white mr-[70px]'>
    <div className='font-Pop flex flex-col justify-end items-end '>
<p className='text-[32px]'> Our Service</p>
<p className='text-[20px] font-Pop font-normal'>what we provide for You</p>
    </div>
    <div className='mt-[52px] text-[36px] grid grid-cols-2 gap-8'>
        <div className='Scard flex items-center justify-center w-[300px] h-[80px]'>
<p className='text-white'>SMIS</p>
        </div>
        <div className='Scard flex items-center justify-center w-[300px] h-[80px]'>
<p className='text-white'>Digital Library</p>
        </div>
        <div className='Scard flex items-center justify-center w-[300px] h-[80px]'>
<p className='text-white'>E-Learning</p>
        </div>
        <div className='Scard flex items-center justify-center w-[300px] h-[80px]'>
<p className='text-white'>AMU-RDB</p>
        </div>
    </div>
</div>
            </div>
        </div>

       
    </div>
  )
}

export default Service