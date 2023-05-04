import React from 'react'
import club from '../Asset/club.png'
import data from '../Data/Data'
function Club() {
  return (
    <div >
<div>
    <div className='relative text-white flex flex-col justify-center '>
       <img className='relative' src={club} alt="" /> 
       <div className='absolute top-0 ml-[101px] mt-[94px]'>
<p className='font-poet text-[96px] text-[#525050] font-bold -mb-5'>Campus Club</p>
<p className='text-[64px] font-Pop '>that you can <br/> participate <br/> in.</p>
<div className='flex justify-around gap-8  text-center mr-[109px] mt-[70px]'>
    {data.clubCard.map((datas,index)=>(
 <div className='club-card '>
 <p className='text-[32px] font-Pop mt-[62px] mb-[35px]'>{datas.title}</p>
 <p className='text-[16px] font-Pop p-2'>{datas.Dic}</p>
</div>
    ))}
   
    
</div>
       </div>
    </div>
</div>

    </div>
  )
}

export default Club