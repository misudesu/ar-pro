import React, { useState } from 'react'
import Input from '../component/Input'
import ARimg from '../Asset/ARimg.png'
import Button from '../component/Button'
function AR() {
  const [form,setForm]=useState({
    title:null,
    subTitle:null,
    image:null,
    frontVideo:null,
    backVideo:null,
    PDF:null,
    website:null,
    telegram:null,
    facebook:null,
    tiwtter:null,
    email:null
  })
  function handlChange(e){
    e.preventDefault();
setForm({...form,[e.target.name]:e.target.value});
  }
  function upload(){
console.log(form)
  }
  return (
    <div>
      <p className='mt-8 ml-8'>AR page </p>
      <div className='flex'>
       
        <div className='flex flex-col gap-4  ml-8 mt-8'>
        <p>Profile</p>
        <Input styleLable='text-sm mb-[-5px] ' type='text' name='title' lable="Title" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='text' name='subTitle' lable="Sub Title" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='file' name='image' lable="Image" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='file' name='frontVideo' lable="Front Video" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='file' name='backvideo' lable="Back Video" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='file' name='PDF' lable="PDF" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        </div>
        {/* social media */}
        <div className='flex flex-col gap-4  ml-8 mt-8'>
        <p>Scoial link</p>
        <Input styleLable='text-sm mb-[-5px] ' type='text' name='website' lable="Website" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='text' name='telegram' lable="Telegram" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='text' name='facebook' lable="FaceBook" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='text' name='tiwtter' lable="Twitter" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='email' name='email' lable="Email" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Button type='submite' style='h-[40px] w-[300px] bg-blue-500 mt-4 hover:bg-grey-200' onClick={upload} >Add</Button>

        </div>
        <div className='flex flex-col gap-4  ml-8 mt-8'>
          <img className='w-[300px] h-[150px]' src={ARimg}/>
        </div>
      </div>
    </div>
  )
}

export default AR