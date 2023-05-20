
import TopNav from '../component/TopNav'
import SideNav from '../component/SideNav'
import Home from './Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AR from './AR';
import FAQs from './FAQs';
import Clubs from './Clubs';
import Department from './Department';
import React ,{ useEffect, useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';

import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { auth, db } from '../Server/Config'

import { useAuth} from '../Fanction/AuthProvider';
import Landing from './Landing';
function Root() {
  const auths=useAuth();
 
 
  const [nav, setNav]=useState(0);

  //
  const [users] = useAuthState(auth);
  const [ar,setAR]=useState(null);
  const [depar,setDepartment]=useState(null);
  const [Club,setClub]=useState(null);
  const [Faq,setFaq]=useState(null);
    
 
  const productRefA = collection(db, "AR");
  const productRefD = collection(db, "Department");
  const productRefC = collection(db, "Club");
  const productRefF = collection(db, "FAQs");
  
  
  
  
    
 
   
 
  useEffect(() => {
   if (!users?.email) {
     return;
   }
   const q = query(productRefA, where("Key", "==", users?.email));
    const unsubscribe = onSnapshot(q, (snapshot) => {
         
      const frame = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
 
      setAR(frame);
    }, (error) => {
      console.error("Error getting documents:", error);
    });
 
    // Cleanup function
    return () => {
      unsubscribe();
    };
 
 }, [users?.email]);
 useEffect(() => {
   if (!users?.email) {
     return;
   }
   const department = query(productRefD, where("Key", "==", users?.email));
  const unsubscribe1 = onSnapshot(department, (snapshot) => {
    const frame = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDepartment(frame);
  }, (error) => {
    console.error("Error getting documents:", error);
  });
 
  // Cleanup function
  return () => {
    unsubscribe1();
  };
 
 }, [users?.email]);
 useEffect(() => {
   if (!users?.email) {
     return;
   }
   const faq = query(productRefF, where("Key", "==", users?.email));
  const unsubscribe2 = onSnapshot(faq, (snapshot) => {
    const frame = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFaq(frame);
  }, (error) => {
    console.error("Error getting documents:", error);
  });
 
  // Cleanup function
  return () => {
    unsubscribe2();
  };
 
 }, [users?.email]);
 useEffect(() => {
   if (!users?.email) {
     return;
   }
   const club = query(productRefC, where("Key", "==", users?.email));
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
 
 }, [users?.email]);
 
  return (
   
        <div className='flex w-full'>
        <div className={`${auths.publics===undefined?'w-[15%] h-screen bg-black text-white':'hidden'}`}>
        <SideNav navs={nav} nav={setNav}/>
            </div>
            <div className={`${auths.publics===undefined?'w-[90%] h-[40px] text-white':''}`}>
           {auths.publics===undefined? <TopNav/>:''}
            <div className='text-black'>

            <Routes>
     
     <Route path="/Landing/:demo" element={<Landing ar={ar} depar={depar} Club={Club} Faq={Faq}  />} />

 <Route path='/AR' element={<AR/>} />
 <Route path='/faq' element={<FAQs FAQs='FAQs'  pageTitle="ALL FAQ's"/>} />
 <Route path='/onClub' element={<Clubs Department='Club' pageTitle='ALL Club'/>} />
 <Route path='/department' element={<Department Department='Department' pageTitle='ALL Department' />}/>

 <Route path='/' element={<Home ar={ar} depar={depar} Club={Club} Faq={Faq}  />} />
 <Route path="*" element={<Navigate to='/' />} />
   </Routes>
            </div>
            </div>
        </div>
   
  )
}

export default Root