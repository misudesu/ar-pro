import React, { useEffect, useState } from 'react'
import Table from './Table'
import Button from './Button'

import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, where ,deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL,deleteObject } from "firebase/storage";
import { storage, db, auth } from "../Server/Config";
import { useAuthState } from "react-firebase-hooks/auth";
import {  message, Space,  } from 'antd';
import Input from './Input'
import TextArea from './TextArea'
function DepartmentForm(props) {
   
    const [users] = useAuthState(auth);
    const [DB,setDatabase]=useState(null)
    const [formData,setformData]=useState({
        Discription:null,
        title:null,
        image:null,
        LeaderImage:null,
        LeaderName:null,
        LeaderPosition:null,
        LeaderRoomNo:null,
        LeaderPhone:null,
        LeaderEmail:null,

    })
    const [chnage,setSwitch]=useState(true);
    function Switch () {
        setSwitch(!chnage)
        } 
       
        const [messageApi, contextHolder] = message.useMessage();
        const notif = (type,message) => {
          messageApi.open({
            type: type,
            content: message,
          });
        };
        function handlChange(e){
          e.preventDefault();
      setformData({...formData,[e.target.name]:e.target.value});
        }
        const handleImageChange = (e) => {
          setformData({ ...formData, [e.target.name]: e.target.files[0] });
        };
       
        function upload(){
console.log(formData);
            if(formData.title!=null && formData.Discription!=null && formData.image!=null&&formData.title!='' && formData.Discription!='' && formData.image!=''){
              
                    const storageRef = ref(
                      storage,
                      `/${props.Department}/${Date.now()}${formData.image.name}`
                    );
            
                    const uploadImage = uploadBytesResumable(storageRef, formData.image);
                    notif('success','Please wait request processing',1);
                    uploadImage.on(
                     "state_changed",
                     (snapshot) => {
                       const progressPercent = Math.round(
                         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                       );
                       
                     },
                     (err) => {
                       console.log(err);
                     },
                     () => {
                        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                          const storageRef = ref(
                            storage,
                            `/${props.Department}/${Date.now()}${formData.LeaderImage.name}`
                          );
                  
                          const uploadImage = uploadBytesResumable(storageRef, formData.LeaderImage);
                              notif('success','Please wait request processing',1);
                          uploadImage.on(
                           "state_changed",
                           (snapshot) => {
                             const progressPercent = Math.round(
                               (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                             );
                         
                           },
                           (err) => {
                             console.log(err);
                           },
                           () => {
                              getDownloadURL(uploadImage.snapshot.ref).then((image) => {
                            const articleRef = collection(db,props.Department);
                         
                              //
                              addDoc(articleRef, {    
                                  Key:users?.email,
                                title:formData.title,
                                    Discription:formData.Discription,
                                    image:url,    
                                    LeaderName:formData.LeaderName,
                                    LeaderPhone:formData.LeaderPhone,
                                    LeaderEmail:formData.LeaderEmail,
                                    LeaderPosition:formData.LeaderPosition,
                                    LeaderRoomNo:formData.LeaderRoomNo,
                                    LeaderImage:image,   
                                     createdAt: Timestamp.now().toDate(),
                                })
                                  .then(() => {
                                   notif('success','All Data added successfully',1);
                                   setformData({...formData,title:''})
                                   setformData({...formData,image:''})
                                   setformData({...formData,Discription:''})
                                  })
                                  .catch((err) => {
                                    notif('error',"Error adding article",1);
                                  });
                          
                        }
                        );
                        //
                        }
                        );
                      }
                      //
                        )
                    }
                    )
                  }
                     
                      else{
                        notif('warning','All information Requerd',1);
                       }
            
                 
        }
        const Delete=(id,image)=>{
            try {
              deleteDoc(doc(db, props.Department, id));
             
               const storageRef = ref(storage,image);
               deleteObject(storageRef);
               notif('success',"successfuly deleted",1); 
            } catch (error) {
              notif('error',"Error deleting article",1);      
            }
          }
          const productRef = collection(db, props.Department);
          useEffect(() => {
            const q = query(productRef, orderBy("createdAt", "desc"));
      
            const unsubscribe = onSnapshot(q, (snapshot) => {
              const frame = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              console.log(frame, users?.email);
              const tabel=frame.map(({id,title,image,Discription})=>({id,title,Discription,image}))
              setDatabase(tabel);
            }, (error) => {
              console.error("Error getting documents:", error);
            });
            
            // Cleanup function
            return () => {
              unsubscribe();
            };
        }, []);
  return (
    <div>
      {contextHolder}
        <div>
            <div className='flex flex-col justify-center'>
                <div className='flex mt-8 justify-end mr-8'>
                <div className='flex  items-center   mx-8'>
        <p onClick={()=>Switch()} className={`px-5 py-2 border-b-2 w-48 text-center  ${chnage!=false?'border-blue-500' :''}`}>{props.pageTitle}</p>
        <p onClick={()=>Switch()} className={`py-2 px-5 border-b-2 w-32 text-center  ${chnage!=true?'border-blue-500' :''}`}>ADD +</p>
      </div>
                </div>
                {chnage!=false?
                <div className='ml-8 border bottom-2 m-8'>
                    <Table Delete={Delete} table={DB} />
                </div>
                :
                <div className='mx-5 my-5 flex gap-8 '>
                    <div>

        <Input styleLable='text-sm mb-[-5px] ' type='text' name='title' lable="Title" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <TextArea styleLable='text-sm mb-[-5px] ' type='text' name='Discription' lable="Discrption" handleChange={handlChange} style=' w-[300px] rounded-md border border-blure-300 '></TextArea>
        <Input styleLable='text-sm mb-[-5px] ' type='file' name='image' lable="Image" handleChange={handleImageChange} style='h-[40px] w-[300px] rounded-md flex flex-col justify-center items-center ' />
        <Button type='submite' style='h-[40px] w-[300px] bg-blue-500 mt-4 hover:bg-grey-200 text-white' onClick={upload} >Add</Button>
                    </div>
<div>
<Input styleLable='text-sm mb-[-5px] ' type='text' name='LeaderName' lable="Leader Name" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
<Input styleLable='text-sm mb-[-5px] ' type='text' name='LeaderPosition' lable="Position" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
<Input styleLable='text-sm mb-[-5px] ' type='text' name='LeaderRoomNo' lable="Room No" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
<Input styleLable='text-sm mb-[-5px] ' type='text' name='LeaderPhone' lable="Phone" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
<Input styleLable='text-sm mb-[-5px] ' type='text' name='LeaderEmail' lable="Email" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
<Input styleLable='text-sm mb-[-5px] ' type='file' name='LeaderImage' lable="Leader Image" handleChange={handleImageChange} style='h-[40px] w-[300px] rounded-md flex flex-col justify-center items-center ' />

</div>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default DepartmentForm