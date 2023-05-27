import React, { useState } from 'react'
import Input from '../component/Input'
import Button from '../component/Button';
import limg from '../Asset/limg.png'
import { Link } from 'react-router-dom';
import {  message, Space } from 'antd';
import { createUserWithEmailAndPassword, updateProfile, deleteUser,reauthenticateWithCredential} from "firebase/auth";
import { storage, db, auth } from "../Server/Config";
import { addDoc, collection, Timestamp } from 'firebase/firestore';
function Signup() {
    const [messageApi, contextHolder] = message.useMessage();
    const notif = (type,message) => {
      messageApi.open({
        type: type,
        content: message,
        
      });
    };
    const [formData,setFormData]=useState({
        email:null,
        password:null,
        Reptpassword:null
    })
    function handlChange(e){
      e.preventDefault();
setFormData({...formData,[e.target.name]:e.target.value});
    }
    const articleRef = collection(db, 'User');
    function SignUp(){
        console.log(formData)
        if(formData.password===formData.Reptpassword){
    
            handleSignup();
        }else{
           notif('warning','Password are not The Same!')
        }
    }
    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            addDoc(articleRef, {
              Key:formData.email,
              stutes:false,
              role:'Admin',
               createdAt: Timestamp.now().toDate(),
          }) 
          updateProfile(auth.currentUser, { displayName: 'Admin' })  

            .catch((error) => {
              notif(error,"Error adding article",1);
            });
         handleSignUp();
        } catch (error) {
            notif( "error",error.code );
        }
      };
      function handleSignUp(){
        notif('success','Acount Created successfully go to Login Page');
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
        <div className='flex justify-center items-center '>
<div>
    <Input styleLable='text-sm mb-[-5px] ' type='email' name='email' lable="Email" handleChange={handlChange} style='h-[40px] w-[500px] rounded-md border border-blure-500 ' />
    <Input styleLable='text-sm mb-[-5px]' name='password' placeholder='Password' type='password' style='h-[40px] w-[500px] rounded-md border border-blure-500 '  lable="Password" handleChange={handlChange} />
    <Input styleLable='text-sm mb-[-5px]' name='Reptpassword' placeholder='Password' type='password' style='h-[40px] w-[500px] rounded-md border border-blure-500 '  lable="Password" handleChange={handlChange} />
<Button type='submite' style='h-[40px] w-[500px] bg-blue-500 mt-4 text-white' onClick={()=>SignUp()} >SignUp</Button>
<Link to='/'>
<p className='text-center mt-5'>Login</p>
</Link>

</div>
        </div>
        </div>  
    </div>
  )
}

export default Signup