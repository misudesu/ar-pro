import React from 'react'
import Card from '../component/Card'
import data from '../Data/Data'
import Service from '../component/Service'
import Gread from '../component/Gread'
import Club from '../component/Club'
import FAQ from '../component/FAQ'
import Footer from '../component/Footer'
import { useParams } from 'react-router-dom'
import { useAuth } from './AppProvider'

function Landing(props) {
  const {id} =useParams()
 
 
  return (
    <div className='mt-0 bg-black'>
      <div>
        <p className=' heding heding1 text-[96px] looding-[129px] text-center font-Poppins'>
         <span className='mt-[90px] text-white inline-block mt-[214px]'>
         Take Information to
          </span> 
          <p className=' heding2 font-bold font-poet'>The Next Level</p>
          </p>
     
      </div>

      <div className=' mt-[81px] '>
        <p className='font-Pop font-normal text-[24px]  text-center moto'>
        Arbaminch university fresh student information page<br/>
welcome to our campus and we are here to help you
        </p>
      </div>
      <div className=' p-10 overflow-hidden flex gap-10 mt-[145px]'>
      {props.depar?.map((datas,index)=>(
<div key={index}>
<Card    title={datas.title} img={datas.image} desc={datas.Discription} />
  </div>
      ))}

      </div>
     <div className='mt-[198px]'>
      <p className='text-white text-[64px] font-Pop text-center S-title'>One Organization <br/>
<span className='font-poet'>
Infinite Possibilities.
  </span> 
</p>
     </div>
     <div className='mt-[61px]'>
      <Service/>
     </div>
     <div className='mt-[68px]'>
      <Gread/>
     </div>
     <div className='mt-[68px]'>
      <Club Clubs={props.Club}/>
      
     </div>
     <div className='mt-[68px]'>
      <FAQ Faq={props.Faq}/>
      
     </div>
     <div className='mt-[68px]'>
      <Footer/>
      </div>
    </div>
  )
}

export default Landing