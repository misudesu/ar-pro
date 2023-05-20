import React, { useState } from 'react'
import {AiOutlineCaretDown,AiOutlineCaretRight} from "react-icons/ai";
import data from '../Data/Data';
function FAQ(props) {
    const [left,setLeft]=useState(true);
    
  return (
    <div>
        <div className=' flex justify-center items-center mt-[280px] '>
            <div className='relative  '>
            <p className=' faq '>{props.Faq?.length}</p>
    <div className='absolute top-24 right-0  w-full flex justify-center items-center text-white'>
        <p className='text-center h-[54px] flex flex-col justify-center items-center w-[143px] bg-black'> <span className='text-[36px] font-Pop'> FAQ's</span> </p>
            </div>
          
            </div>
        </div>
        <div className='text-white '>
            {props.Faq?.map((datas,index)=>(
<div key={index} className='flex gap-4 ml-[101px] items-center'> 
<div className='flex flex-col gap-2 mb-2'>
    <div className='flex gap-4'>
    {left===index?<AiOutlineCaretDown color='white' size={58} onClick={()=>setLeft(index)} />:<AiOutlineCaretRight color='white' size={58} onClick={()=>setLeft(index)}/>} 

<p className='font-Pop text-[36px]'>{datas.title}</p>
    </div>
{left===index?<p className='ml-[30px] border p-3 border-t-black border-b-black border-r-black  border-l-red-500 w-[893px]'>{datas.Discrption}</p>:''}
</div>

</div>
            ))}
        </div>
    </div>
  )
}

export default FAQ