import React from 'react'
import img1 from '../Asset/rafiki.png'
import AR from '../Asset/cuate.png'
import total from '../Asset/total.png'
import group from '../Asset/group.png'
function Home() {
  return (
    <div>
       <p className='mt-8 ml-8'>Home page</p>
        <div className='flex justify-center items-center'>
            <div className='flex gap-5 mt-8'>     
                <div className=' w-[212px] h-[135px]'>
                <div className='flex gap-2'>
                <p className='text-[40px] flex justify-end items-end font-bold '>
                    <p>41+</p>  
                    </p>
<img className='w-[130px] h-[117px] ' src={img1} alt="" />
                </div>
                <div className='h-8 w-full flex justify-center item-center text-center hover:bg-slate-300 text-white bg-green-300'>
                <p className='flex justify-center items-center'>  
    <p> Total News</p>
</p>
                </div>
                </div>
                {/*  */}
                <div className=' w-[212px] h-[135px]'>
                <div className='flex gap-2'>
                <p className='text-[40px] flex justify-end items-end font-bold '>
                    <p>1</p>  
                    </p>
<img className='w-[130px] h-[117px] ' src={AR} alt=""/>
                </div>
                <div className='h-8 w-full flex justify-center item-center text-center text-white bg-pink-300 hover:bg-slate-300'>
                <p className='flex justify-center items-center  '>  
    <p> Sub AR Experience</p>
   

</p>
                </div>
                </div>
                {/* second  */}
               
                {/* therd */}
                <div className=' w-[212px] h-[135px]'>
                <div className='flex gap-2'>
                <p className='text-[40px] flex justify-end items-end font-bold '>
                    <p>41+</p>  
                    </p>
<img className='w-[130px] h-[117px] ' src={total} alt=""/> 
                </div>
                <div className='h-8 w-full flex justify-center item-center text-center hover:bg-slate-300 text-white bg-yellow-400'>
                <p className='flex justify-center items-center'>  
    <p> Total </p>
</p>
                </div>
                </div>
                {/* forth */}
                <div className=' w-[212px] h-[135px]'>
                <div className='flex gap-2'>
                <p className='text-[40px] flex justify-end items-end font-bold '>
                    <p>41k</p>  
                    </p>
<img className='w-[130px] h-[117px] ' src={group} alt=""/> 
                </div>
                <div className='h-8 w-full flex justify-center item-center text-center hover:bg-slate-300 text-white bg-blue-400'>
<p className='flex justify-center items-center'>  
    <p> Total</p>
</p>
                </div>
                </div>
                {/*  */}
            </div>
        </div>
        </div>
  )
}

export default Home