import React, { useEffect, useState } from 'react'
import Input from '../component/Input'
import ARimg from '../Asset/ARimg.png'
import Button from '../component/Button'
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, where ,deleteDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL,deleteObject } from "firebase/storage";
import { storage, db, auth } from "../Server/Config";
import { useAuthState } from "react-firebase-hooks/auth";
import {  message, Space,  } from 'antd';
import d1 from '../Asset/d1.png'
import d2 from '../Asset/d2.png'
import Table from '../component/Table';
import { useParams } from 'react-router-dom';
import { useAuth } from '../Fanction/AuthProvider';
import ArTable from '../component/ArTable';
function AR() {
  const {demo} =useParams()
 const auths=useAuth();
 auths.updateDemo(demo)
//  const View=(e)=>{
  
//   const userinfo = doc(db, "User","FeedBack","GeneralFeedBack", e.target.name);
//   updateDoc(userinfo, {
//     States: "Viewed",
//   });
// }

  const [users] = useAuthState(auth);
  const [chnage,setSwitch]=useState(true);
  const [DB,setDatabase]=useState([])

  const [form,setForm]=useState({
    Title:null,
    SubTitle:null,
    Image:null,
    FrontVideo:null,
    BackVideo:null,
    Pdf:null,
    OtherWeb:null,
    AmuWebsite:null,
    Telegram:null,
    Facebook:null,
    Phone:null,
    Email:null,
    Smis:null,
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
  const handleImageChange = (e) => {
    var file = document.querySelector('input[type=file]')['files'][0];
    var reader = new FileReader();
    var baseString;
    reader.onloadend = function () {
        baseString = reader.result;
        setForm({ ...form, Image: baseString });
       
       // setformData({...formData, base64Frame : baseString});
    };
  
    const frame=  reader.readAsDataURL(file);
   
  };
  function upload(){
    // const storageRef = ref(
    //   storage,
    //   `/IMAGE/${Date.now()}${form.Image.name}`
    // );
    // const storageRefv = ref(
    //   storage,
    //   `/VIDEO/${Date.now()}${form.FrontVideo.name}`
    // );
    // const storageRefv1 = ref(
    //   storage,
    //   `/VIDEO/${Date.now()}${form.BackVideo.name}`
    // );
    // const storageRefp = ref(
    //   storage,
    //   `/PDF/${Date.now()}${form.Pdf.name}`
    // );
    // const uploadImage = uploadBytesResumable(storageRef,form.Image);
    // const uploadVideo = uploadBytesResumable(storageRefv,form.FrontVideo);
    // const uploadVideo1 = uploadBytesResumable(storageRefv1,form.BackVideo);
    // const uploadPdf = uploadBytesResumable(storageRefp, form.Pdf);
    // uploadImage.on(
    //  "state_changed",
    //  (snapshot) => {
    //    const progressPercent = Math.round(
    //      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //    );
    //    notif('suecces','Please wait request processing image');
    //  },
    //  (err) => {
    //    console.log(err);
    //  },
    //  () => {
    //     getDownloadURL(uploadImage.snapshot.ref).then((url) => {
            // const articleRef = collection(db, "ardb");
            // uploadVideo.on(
            //   "state_changed",
            //   (snapshot) => {
            //     const progressPercent = Math.round(
            //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            //     );
            //     notif('suecces','Please wait request processing front video');
            //   },
            //   (err) => {
            //     console.log(err);
            //   },
            //   () => {
            //      getDownloadURL(uploadVideo.snapshot.ref).then((urlvideo) => {
                  //
                  // uploadVideo1.on(
                  //   "state_changed",
                  //   (snapshot) => {
                  //     const progressPercent = Math.round(
                  //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  //     );
                  //     notif('suecces','Please wait request processing back video');
                  //   },
                  //   (err) => {
                  //     console.log(err);
                  //   },
                  //   () => {
                  //      getDownloadURL(uploadVideo1.snapshot.ref).then((urlvideo1) => {
                        //
              //           uploadPdf.on(
              //             "state_changed",
              //             (snapshot) => {
              //               const progressPercent = Math.round(
              //                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              //               );
              //               notif('suecces','Please wait request processing pdf file');
              //             },
              //             (err) => {
              //               console.log(err);
              //             },
              //             () => {
              //                getDownloadURL(uploadPdf.snapshot.ref).then((pdf) => {
              // //
              const ARinfo = doc(db, "ardb",'ar');
               updateDoc(ARinfo, {
                    Key:users?.email,
                    Title:form.Title,
                    SubTitle:form.SubTitle,
                    Image:form.Image,
                    FrontVideo:form.FrontVideo,
                    BackVideo:form.BackVideo,
                    Pdf:form.Pdf,
                    AmuWebsite:form.AmuWebsite,
                    OtherWeb:form.OtherWeb,
                    Telegram:form.Telegram,
                    Facebook:form.Facebook,
                    Phone:form.Phone,
                    Email:form.Email,
                    Smis:form.Smis,
                     createdAt: Timestamp.now().toDate(),
                })
                  .then(() => {
                    notif('success','All added successfully');
                   setForm({...form,title:''})
                   setForm({...form,email:''})
                   setForm({...form,telegram:''})
                   setForm({...form,facebook:''})
                   setForm({...form,tiwtter:''})
                   setForm({...form,website:''})
                   setForm({...form,subtitle:''})
                
                  })
                  .catch((err) => {
                    alert("Error adding article", { type: "error" });
                  });
              
      //    
        // }
        // );

        // }
        // );
    //  
  // }
  // );

  // }
  // );
  //
// }
// );

// }
// );
//
// }
// );

// }
// );
   
  }
  function Switch () {
    setSwitch(!chnage)
    } 
       const productRef = collection(db, "ardb");
    useEffect(() => {
      const q = query(productRef, orderBy("createdAt", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const frame = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
       
        const table=frame.map(({id,Title,Image,SubTitle,FrontVideo,BackVideo,Pdf,OtherWeb,Phone,Smis,Telegram,Facebook,Email,AmuWebsite})=>({id,Title,SubTitle,Image,FrontVideo,BackVideo,Pdf,OtherWeb,Phone,Smis,Telegram,Facebook,Email,AmuWebsite}))
        setDatabase(table);
        const dataUrl = "data:image/jpeg;base64," + table[0]?.Image.split(",")[1];
        //console.log(dataUrl) 
        const input = document.getElementById("filepdf");
//const link = document.getElementById("link");
const file = new File([table[0]?.Pdf], table[0]?.Pdf.split("/").pop());

//console.log(file);
     setForm({...form,Title:table[0]?.Title,Image:table[0]?.Image,SubTitle:table[0]?.SubTitle,
      FrontVideo:table[0]?.FrontVideo,BackVideo:table[0]?.BackVideo,Pdf:table[0].Pdf,
      OtherWeb:table[0]?.OtherWeb,Phone:table[0]?.Phone,Smis:table[0]?.Smis,Telegram:table[0]?.Telegram,
      Facebook:table[0]?.Facebook,Email:table[0]?.Email,AmuWebsite:table[0]?.AmuWebsite})
      }, (error) => {
        console.error("Error getting documents:", error);
      });
      
      // Cleanup function
      return () => {
        unsubscribe();
      };
  }, []);
  
const Delete=(id,FrameImage,video,video1,pdf)=>{
  try {
    deleteDoc(doc(db, "ardb", id));   
     const storageRef = ref(storage,FrameImage);
     deleteObject(storageRef);
     const storageRefp = ref(storage,pdf);
     deleteObject(storageRef);
     const storageRefv = ref(storage,video);
     deleteObject(storageRef);
     const storageRefv1 = ref(storage,video1);
     deleteObject(storageRef);
  } catch (error) {
    notif('error', error.message,1);      
  }
}
  return (
    <div>
      <div className='flex  items-center  justify-end my-8  mx-8'>
        <p onClick={()=>Switch()} className={`px-5 py-2 border-b-2 w-32 text-center  ${chnage!=false?'border-blue-500' :''}`}>AR</p>
        <p onClick={()=>Switch()} className={`py-2 px-5 border-b-2 w-32 text-center  ${chnage!=true?'border-blue-500' :''}`}>ADD +</p>
      </div>
      {contextHolder}
      {chnage!=false?
  <div className='m-5'>

 <ArTable Delete={Delete} table={DB}/>
 </div>
    :
    
      <div className='flex'>
       
        <div className='flex flex-col gap-4  ml-8 mt-8 mb-5'>
        <p>Profile</p>
        <Input styleLable='text-sm mb-[-5px] ' type='text' value={form.Title} name='Title' lable="Title" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='text' value={form.SubTitle} name='SubTitle' lable="Sub Title" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px]  ' hidden='' accept=".png,.jpeg"  type='file'  name='Image' lable="Image" handleChange={(e)=>handleImageChange(e)} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] '  type='text' value={form.FrontVideo}  name='FrontVideo' lable="Front Video" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] '  type='text' value={form.BackVideo}  name='BackVideo' lable="Back Video" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] '  id='filepdf' value={form.Pdf}  type='text' name='Pdf' lable="PDF" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Button type='submite' style='h-[40px] w-[300px] bg-blue-500 mt-4  hover:bg-grey-200 text-white ' onClick={upload} >Add</Button>

        </div>
        {/* social media */}
        <div className='flex flex-col gap-4  ml-8 mt-8'>
        <p>Scoial link</p>
        <Input styleLable='text-sm mb-[-5px] ' type='text' value={form.AmuWebsite} name='AmuWebsite' lable="Website" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='text' value={form.OtherWeb} name='OtherWeb' lable="calculeter site" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='text' value={form.Smis} name='Smis' lable="Smis site" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />

        <Input styleLable='text-sm mb-[-5px] ' type='text' value={form.Telegram} name='Telegram' lable="Telegram" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='text' value={form.Facebook} name='Facebook' lable="FaceBook" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='text' value={form.Phone} name='Phone' lable="Phone" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        
        <Input styleLable='text-sm mb-[-5px] ' type='email' value={form.Email} name='Email' lable="Email" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        
        </div>
        <div className='flex flex-col gap-4  ml-8 mt-8'>
          <img className='w-[300px] h-[150px]' src={form.Image}/>
        </div>
      </div>
    }
    </div>
  )
}

export default AR