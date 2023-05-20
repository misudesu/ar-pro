import React, { useEffect, useState } from 'react'
import img1 from '../Asset/rafiki.png'
import AR from '../Asset/cuate.png'
import total from '../Asset/total.png'
import group from '../Asset/group.png'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { auth, db } from '../Server/Config'
import { useAuthState } from 'react-firebase-hooks/auth'
function Home() {
    const [users] = useAuthState(auth);
    const [ar,setAR]=useState(null);
    const [depar,setDepartment]=useState(null);
    const [Club,setClub]=useState(null);
    const [Faq,setFaq]=useState(null);
      
  
    const productRefA = collection(db, "AR");
    const productRefD = collection(db, "Department");
    const productRefC = collection(db, "Club");
    const productRefF = collection(db, "FAQs");
    const q = query(productRefA, where("Key", "==", users?.email));
    const department = query(productRefD, where("Key", "==", users?.email));
    const club = query(productRefC, where("Key", "==", users?.email));
    const faq = query(productRefF, where("Key", "==", users?.email));
    useEffect(() => {
      const unsubscribe = onSnapshot(q, (snapshot) => {
           
        const frame = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const tabel=frame.map(({id,title,image,subTitle,frontVideo,backVideo,PDF})=>({id,title,subTitle,image,frontVideo,backVideo,PDF}))
        setAR(tabel);
      }, (error) => {
        console.error("Error getting documents:", error);
      });

      // Cleanup function
      return () => {
        unsubscribe();
      };
   
  }, []);
  useEffect(() => {
    const unsubscribe1 = onSnapshot(department, (snapshot) => {
      const frame = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const tabel=frame.map(({id,title,image,subTitle,frontVideo,backVideo,PDF})=>({id,title,subTitle,image,frontVideo,backVideo,PDF}))
      setDepartment(tabel);
    }, (error) => {
      console.error("Error getting documents:", error);
    });

    // Cleanup function
    return () => {
      unsubscribe1();
    };
 
}, []);
useEffect(() => {
    const unsubscribe2 = onSnapshot(faq, (snapshot) => {
      const frame = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const tabel=frame.map(({id,title,image,subTitle,frontVideo,backVideo,PDF})=>({id,title,subTitle,image,frontVideo,backVideo,PDF}))
      setFaq(tabel);
    }, (error) => {
      console.error("Error getting documents:", error);
    });

    // Cleanup function
    return () => {
      unsubscribe2();
    };
 
}, []);
useEffect(() => {
    const unsubscribe3 = onSnapshot(club, (snapshot) => {
      const frame = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      setClub(frame);
    }, (error) => {
      console.error("Error getting documents:", error);
    });
    // Cleanup function
    return () => {
      unsubscribe3();
    };
 
}, []);
  return (
    <div>
       <p className='mt-8 ml-8'>Home page</p>
        <div className='flex justify-center items-center'>
            <div className='flex gap-5 mt-8'>     
                <div className=' w-[212px] h-[135px]'>
                <div className='flex gap-2'>
                <p className='text-[40px] flex justify-end items-end font-bold '>
                    <p>{Faq?.length}</p>  
                    </p>
<img className='w-[130px] h-[117px] ' src={img1} alt="" />
                </div>
                <div className='h-8 w-full flex justify-center item-center text-center hover:bg-slate-300 text-white bg-green-300'>
                <p className='flex justify-center items-center'>  
    <p> Total FAQ's</p>
</p>
                </div>
                </div>
                {/*  */}
                <div className=' w-[212px] h-[135px]'>
                <div className='flex gap-2'>
                <p className='text-[40px] flex justify-end items-end font-bold '>
                    <p>{ar?.length}</p>  
                    </p>
<img className='w-[130px] h-[117px] ' src={AR} alt=""/>
                </div>
                <div className='h-8 w-full flex justify-center item-center text-center text-white bg-pink-300 hover:bg-slate-300'>
                <p className='flex justify-center items-center  '>  
    <p>AR Experience</p>
   

</p>
                </div>
                </div>
                {/* second  */}
               
                {/* therd */}
                <div className=' w-[212px] h-[135px]'>
                <div className='flex gap-2'>
                <p className='text-[40px] flex justify-end items-end font-bold '>
                    <p>{depar?.length}</p>  
                    </p>
<img className='w-[130px] h-[117px] ' src={total} alt=""/> 
                </div>
                <div className='h-8 w-full flex justify-center item-center text-center hover:bg-slate-300 text-white bg-yellow-400'>
                <p className='flex justify-center items-center'>  
    <p> Total Department </p>
</p>
                </div>
                </div>
                {/* forth */}
                <div className=' w-[212px] h-[135px]'>
                <div className='flex gap-2'>
                <p className='text-[40px] flex justify-end items-end font-bold '>
                    <p>{Club?.length}</p>  
                    </p>
<img className='w-[130px] h-[117px] ' src={group} alt=""/> 
                </div>
                <div className='h-8 w-full flex justify-center item-center text-center hover:bg-slate-300 text-white bg-blue-400'>
<p className='flex justify-center items-center'>  
    <p> Total Club</p>
</p>
                </div>
                </div>
                {/*  */}
            </div>
        </div>
        </div>
  )
}

export default Home