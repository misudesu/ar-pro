import React, { useState } from 'react'
import Input from '../component/Input'
import Button from '../component/Button';
import limg from '../Asset/limg.png'
function Login() {
    const [form,setForm]=useState({
        email:'',
        password:'',
    })
    function handlChange(e){
      e.preventDefault();
setForm({...form,[e.target.name]:e.target.value});
    }
    function login(){

    }
  return (
    <div className='h-screen'>
      <div className='flex justify-center items-center gap-4 max-h-screen'>
        {/* left image  */}
        <div>
<img width={100} height={100} className=' w-[100%] h-[100%]' src={limg}/>
        </div>
        {/* login form */}
        <div className='flex justify-center items-center '>
<form>
    <Input styleLable='text-sm mb-[-5px] ' type='email' name='email' lable="Email" handlChage={handlChange} style='h-[40px] w-[500px] rounded-md border border-blure-500 ' />
    <Input styleLable='text-sm mb-[-5px]' name='password' placeholder='Password' type='password' style='h-[40px] w-[500px] rounded-md border border-blure-500 '  lable="Password" handlChage={handlChange} />
<Button type='submite' style='h-[40px] w-[500px] bg-blue-500 mt-4' onClick={login} >Sign in</Button>
<p className='text-center mt-5'>forget Password</p>
</form>
        </div>
        </div>  
    </div>
  )
}

export default Login