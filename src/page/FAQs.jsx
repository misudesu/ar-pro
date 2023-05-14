import React, { useState } from 'react'
import data from '../Data/Data'
import {AiOutlineCaretDown,AiOutlineCaretRight} from "react-icons/ai";
import Button from '../component/Button';
function FAQs() {
  const [left,setLeft]=useState(true);
  return (

    <div className=' '>
      <p className='mt-8 ml-8'>FAQ's</p>
      <div>
      <div className='flex justify-end mr-8'>
            <Button type='submite' style='rounded-[8px] h-[40px] text-white w-[100px] bg-blue-500 mt-4 hover:bg-grey-200' onClick='' >New +</Button>

            </div>
      </div>
            {data.faq.map((datas,index)=>(
<div key={index} className='flex gap-4 ml-[101px] items-center'> 
<div className='flex flex-col gap-2 mb-2'>
    <div className='flex gap-4'>
    {left===index?<AiOutlineCaretDown color='' size={58} onClick={()=>setLeft(index)} />:<AiOutlineCaretRight color='' size={58} onClick={()=>setLeft(index)}/>} 

<p className='font-Pop text-[26px]'>{datas.title}</p> 
<Button type='submite' style='rounded-[8px] h-[30px] text-red font-bold w-[100px] border border-1 border-red-500  mt-4 hover:bg-grey-200' onClick='' >Delete</Button>

    </div>
{left===index?<p className='ml-[30px]  p-3 border-l-[1px]  border-l-red-500 w-[893px]'>{datas.Dec}</p>:''}
</div>

</div>
            ))}
        </div>
  )
}

export default FAQs