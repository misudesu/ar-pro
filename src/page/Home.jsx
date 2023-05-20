import React, { useEffect, useState } from 'react'
import img1 from '../Asset/rafiki.png'
import AR from '../Asset/cuate.png'
import total from '../Asset/total.png'
import group from '../Asset/group.png'
import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../Fanction/AuthProvider'

function Home(props) {
    const {demo} =useParams()
    const auths=useAuth();
    auths.updateDemo(demo)
    
  return (
    <div className='flex flex-col  items-center '>
       <p className='mt-8 ml-8'>Home page</p>
        <div className='flex justify-center items-center'>
            <div className='flex gap-5 mt-8'>     
                <div className=' w-[212px] h-[135px]'>
                <div className='flex gap-2'>
                <p className='text-[40px] flex justify-end items-end font-bold '>
                    <p>{props.Faq?.length}</p>  
                    </p>
<img className='w-[130px] h-[117px] ' src={img1} alt="" />
                </div>
                <div className='h-8 w-full flex justify-center item-center text-center hover:bg-slate-300 text-white bg-green-300'>
                <p className='flex justify-center items-center'>  
    <p> Total FAQ's</p>
</p>
                </div>
                </div>
                {/*  */}
                <div className=' w-[212px] h-[135px]'>
                <div className='flex gap-2'>
                <p className='text-[40px] flex justify-end items-end font-bold '>
                    <p>{props.ar?.length}</p>  
                    </p>
<img className='w-[130px] h-[117px] ' src={AR} alt=""/>
                </div>
                <div className='h-8 w-full flex justify-center item-center text-center text-white bg-pink-300 hover:bg-slate-300'>
                <p className='flex justify-center items-center  '>  
    <p>AR Experience</p>
   

</p>
                </div>
                </div>
                {/* second  */}
               
                {/* therd */}
                <div className=' w-[212px] h-[135px]'>
                <div className='flex gap-2'>
                <p className='text-[40px] flex justify-end items-end font-bold '>
                    <p>{props.depar?.length}</p>  
                    </p>
<img className='w-[130px] h-[117px] ' src={total} alt=""/> 
                </div>
                <div className='h-8 w-full flex justify-center item-center text-center hover:bg-slate-300 text-white bg-yellow-400'>
                <p className='flex justify-center items-center'>  
    <p> Total Department </p>
</p>
                </div>
                </div>
                {/* forth */}
                <div className=' w-[212px] h-[135px]'>
                <div className='flex gap-2'>
                <p className='text-[40px] flex justify-end items-end font-bold '>
                    <p>{props.Club?.length}</p>  
                    </p>
<img className='w-[130px] h-[117px] ' src={group} alt=""/> 
                </div>
                <div className='h-8 w-full flex justify-center item-center text-center hover:bg-slate-300 text-white bg-blue-400'>
<p className='flex justify-center items-center'>  
    <p> Total Club</p>
</p>
                </div>
                </div>
                {/*  */}
            </div>
        </div>
        <div className='w-full m-16 w-[80%] rounded-md bg-blue-500 h-20 '>
            <Link  target='_blank' to={'/Landing/1'}>
        <p className='mt-8 ml-8 text-white'>View A Page Now</p>
            </Link>
        </div>
        </div>
  )
}

export default Home