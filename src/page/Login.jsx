import React, { useState } from 'react'
import Input from '../component/Input'
import Button from '../component/Button';
import limg from '../Asset/limg.png'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile, deleteUser,reauthenticateWithCredential, sendPasswordResetEmail, signInWithEmailAndPassword} from "firebase/auth";
import { storage, db, auth } from "../Server/Config";
import {  message, Space } from 'antd';
import { useAuth } from '../Fanction/AuthProvider';
function Login() {
  let navigate = useNavigate();
    const [form,setForm]=useState({
      Email:null,
        Password:null,
    })
    const [messageApi, contextHolder] = message.useMessage();
    const notif = (type,message) => {
      messageApi.open({
        type: type,
        content: message,
        
      });
    };
    function handlChange(e){
      e.preventDefault();
setForm({...form,[e.target.name]:e.target.value});
    }
    const auths=useAuth();
  async  function  login(){
    if(form.Email!=null&&form.Email!=''&&form.Password!=null&&form.Password!=''){
      try {     
        await signInWithEmailAndPassword(auth, form.Email, form.Password);    
       
       
        navigate("/");
       
      

      } catch (error) {  
        notif('error',error.message)
      }

    }else{
      notif('warning','All field requerd!');
    }
    }
    const ResetPassword=async()=>{
      await sendPasswordResetEmail(auth, form.Email)
    .then(() => {
      notif('success',"Password reset email sent!");
    })
    .catch((error) => {
    
      // ..
      notif('error',error.message)
    });
    }
  return (
    <div className='h-screen'>
      {contextHolder}
      <div className='flex  items-center gap-32 max-h-screen'>
        {/* left image  */}
        <div>
<img  className=' h-screen w-full' src={limg}/>
        </div>
        {/* login form */}
        <div className='flex justify-center items-center  '>
         
<div className='flex flex-col gap-4' >
    <Input styleLable='text-sm mb-[-5px] ' type='email' name='Email' lable="Email" handleChange={handlChange} style='h-[40px] w-[500px] rounded-md border border-blure-500 ' />
    <Input styleLable='text-sm mb-[-5px]' name='Password' placeholder='Password' type='password' style='h-[40px] w-[500px] rounded-md border border-blure-500 '  lable="Password" handleChange={handlChange} />
<Button type='submite' style='h-[40px] w-[500px] bg-blue-500 mt-4 text-white' onClick={login} >Sign in</Button>
<div className='flex justify-center gap-8'>

<p className='text-center mt-5' onClick={ResetPassword} >forget Password</p>
<Link to='/signup'>
<p className='text-center mt-5 text-white'>Sign Up</p>
</Link>
</div>
</div >
        </div>
        </div>  
    </div>
  )
}

export default Login