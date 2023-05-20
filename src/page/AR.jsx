import React, { useEffect, useState } from 'react'
import Input from '../component/Input'
import ARimg from '../Asset/ARimg.png'
import Button from '../component/Button'
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, where ,deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL,deleteObject } from "firebase/storage";
import { storage, db, auth } from "../Server/Config";
import { useAuthState } from "react-firebase-hooks/auth";
import {  message, Space,  } from 'antd';
import d1 from '../Asset/d1.png'
import d2 from '../Asset/d2.png'
import Table from '../component/Table';
function AR() {
  const [users] = useAuthState(auth);
  const [chnage,setSwitch]=useState(true);
  const [DB,setDatabase]=useState(null)
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
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  };
  function upload(){
    const storageRef = ref(
      storage,
      `/IMAGE/${Date.now()}${form.image.name}`
    );
    const storageRefv = ref(
      storage,
      `/VIDEO/${Date.now()}${form.frontVideo.name}`
    );
    const storageRefv1 = ref(
      storage,
      `/VIDEO/${Date.now()}${form.backVideo.name}`
    );
    const storageRefp = ref(
      storage,
      `/PDF/${Date.now()}${form.PDF.name}`
    );
    const uploadImage = uploadBytesResumable(storageRef,form.image);
    const uploadVideo = uploadBytesResumable(storageRefv,form.frontVideo);
    const uploadVideo1 = uploadBytesResumable(storageRefv1,form.backVideo);
    const uploadPdf = uploadBytesResumable(storageRefp, form.PDF);
    uploadImage.on(
     "state_changed",
     (snapshot) => {
       const progressPercent = Math.round(
         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
       );
       notif('suecces','Please wait request processing image');
     },
     (err) => {
       console.log(err);
     },
     () => {
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
            const articleRef = collection(db, "AR");
            uploadVideo.on(
              "state_changed",
              (snapshot) => {
                const progressPercent = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                notif('suecces','Please wait request processing front video');
              },
              (err) => {
                console.log(err);
              },
              () => {
                 getDownloadURL(uploadVideo.snapshot.ref).then((urlvideo) => {
                  //
                  uploadVideo1.on(
                    "state_changed",
                    (snapshot) => {
                      const progressPercent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                      );
                      notif('suecces','Please wait request processing back video');
                    },
                    (err) => {
                      console.log(err);
                    },
                    () => {
                       getDownloadURL(uploadVideo1.snapshot.ref).then((urlvideo1) => {
                        //
                        uploadPdf.on(
                          "state_changed",
                          (snapshot) => {
                            const progressPercent = Math.round(
                              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                            );
                            notif('suecces','Please wait request processing pdf file');
                          },
                          (err) => {
                            console.log(err);
                          },
                          () => {
                             getDownloadURL(uploadPdf.snapshot.ref).then((pdf) => {
              //
              addDoc(articleRef, {
                    Key:users?.email,
                    title:form.title,
                    subTitle:form.subTitle,
                    image:url,
                    frontVideo:urlvideo,
                    backVideo:urlvideo1,
                    PDF:pdf,
                    website:form.website,
                    telegram:form.telegram,
                    facebook:form.facebook,
                    tiwtter:form.tiwtter,
                    email:form.email,
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
        }
        );
   
        }
        );
    //  
  }
  );

  }
  );
  //
}
);

}
);
//
}
);

}
);
   
  }
  function Switch () {
    setSwitch(!chnage)
    } 
       const productRef = collection(db, "AR");
    useEffect(() => {
      const q = query(productRef, where("Key", "==", users?.email));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const frame = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(frame, users?.email);
        const tabel=frame.map(({id,title,image,subTitle,frontVideo,backVideo,PDF})=>({id,title,subTitle,image,frontVideo,backVideo,PDF}))
        setDatabase(tabel);
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
    deleteDoc(doc(db, "AR", id));   
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

 <Table Delete={Delete} table={DB}/>
 </div>
    :
    
      <div className='flex'>
       
        <div className='flex flex-col gap-4  ml-8 mt-8'>
        <p>Profile</p>
        <Input styleLable='text-sm mb-[-5px] ' type='text' name='title' lable="Title" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='text' name='subTitle' lable="Sub Title" handleChange={handlChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='file' name='image' lable="Image" handleChange={handleImageChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='file' name='frontVideo' lable="Front Video" handleChange={handleImageChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='file' name='backVideo' lable="Back Video" handleChange={handleImageChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
        <Input styleLable='text-sm mb-[-5px] ' type='file' name='PDF' lable="PDF" handleChange={handleImageChange} style='h-[40px] w-[300px] rounded-md border border-blure-300 ' />
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
    }
    </div>
  )
}

export default AR