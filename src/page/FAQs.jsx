import React, { useEffect, useState } from 'react'
import data from '../Data/Data'
import {AiOutlineCaretDown,AiOutlineCaretRight} from "react-icons/ai";
import Button from '../component/Button';
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, where ,deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL,deleteObject } from "firebase/storage";
import { storage, db, auth } from "../Server/Config";
import { useAuthState } from "react-firebase-hooks/auth";
import {  message, Space,  } from 'antd';
import Input from '../component/Input';
import TextArea from '../component/TextArea';
function FAQs(props) {
  const [left,setLeft]=useState(true);
  const [users] = useAuthState(auth);
  const [chnage,setSwitch]=useState(true);
  const [DB,setDatabase]=useState(null)
  const [form,setForm]=useState({
    title:null,
    Discription:null,
  })
  const articleRef = collection(db, props.FAQs);
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
function Switch () {
    setSwitch(!chnage)
    } 
    function upload(){
 
      try{

        addDoc(articleRef, {
          Key:users?.email,
          title:form.title,
          Discription:form.Discription,
           createdAt: Timestamp.now().toDate(),
      }) 
        .catch((error) => {
          notif(error,"Error adding article",1);
        });
        setForm({...form,title:'',Discription:''})
      
       
        notif('success',"successfuly deleted",1); 
      }catch(error){
        notif('error',error,1); 
      }
  
    }
    const productRef = collection(db, props.FAQs);
    useEffect(() => {
    const q = query(productRef, where("Key", "==", users?.email));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
    const frame = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    }));
    console.log(frame, users?.email);
    const tabel=frame.map(({id,title,Discription})=>({id,title,Discription}))
    setDatabase(tabel);
    }, (error) => {
    console.error("Error getting documents:", error);
    });
    
    // Cleanup function
    return () => {
    unsubscribe();
    };
    }, []);

    const Delete=(id)=>{
      try {
        deleteDoc(doc(db, props.FAQs, id));
       
         notif('success',"successfuly deleted",1); 
      } catch (error) {
        notif('error',"Error deleting article",1);      
      }
    }

  return (

    <div className=' '>
         {contextHolder}
      <p className='mt-8 ml-8'></p>
      <div>
      <div className='flex justify-end mr-8'>
      <div className='flex  items-center   mx-8'>
        <p onClick={()=>Switch()} className={`px-5 py-2 border-b-2 w-32 text-center  ${chnage!=false?'border-blue-500' :''}`}>{props.pageTitle}</p>
        <p onClick={()=>Switch()} className={`py-2 px-5 border-b-2 w-32 text-center  ${chnage!=true?'border-blue-500' :''}`}>ADD +</p>
      </div>
   
            </div>
      </div>
      {chnage!=false?
  <>
  {DB?.length<=0?<p className='text-center'>No Data here! Add FAQ's </p>:''}
            {DB?.map((datas,index)=>(
<div key={index} className='flex gap-4 ml-[101px] items-center'> 
<div className='flex flex-col gap-2 mb-2'>
    <div className='flex gap-4'>
    {left===index?<AiOutlineCaretDown color='' size={58} onClick={()=>setLeft(index)} />:<AiOutlineCaretRight color='' size={58} onClick={()=>setLeft(index)}/>} 

<p className='font-Pop text-[26px]'>{datas.title}</p> 
<Button type='submite' style='rounded-[8px] h-[30px] text-red font-bold w-[100px] border border-1 border-red-500  mt-4 hover:bg-grey-200' onClick={()=>Delete(datas.id)} >Delete</Button>

    </div>
{left===index?<p className='ml-[30px]  p-3 border-l-[1px]  border-l-red-500 w-[893px]'>{datas.Discription}</p>:''}
</div>

</div>
            ))}
            </>
            :
            <div className='mx-8 my-8'>
                          <Input value={form.title} styleLable='text-sm mb-[-5px] ' type='text' name='title' lable="Title" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <TextArea value={form.Discription} styleLable='text-sm mb-[-5px] ' type='text' name='Discription' lable="Discrption" handleChange={handlChange} style=' w-[300px] rounded-md border border-blure-300 '></TextArea>
        <Button type='submite' style='h-[40px] w-[300px] bg-blue-500 mt-4 hover:bg-grey-200 text-white' onClick={upload} >Add</Button>

            </div>
}
        </div>
  )
}

export default FAQs