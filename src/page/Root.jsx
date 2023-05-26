
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

import { collection, deleteDoc, doc, onSnapshot, orderBy, query, where } from 'firebase/firestore'
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
   const q = query(productRefA,orderBy("createdAt", "desc"));
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
   const department = query(productRefD, orderBy("createdAt", "desc"));
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
   const faq = query(productRefF,orderBy("createdAt", "desc"));
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
   
   const club = query(productRefC,orderBy("createdAt", "desc"));
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
 const [userStates,setStatus]=useState([]);
 const [stutesArray,setStuatesArry]=useState();
 const productRef = collection(db, "User");
 const [database,setDatabase]=useState(null);
 useEffect(()=>{
  const q = query(productRef,  where("Key", "==",users?.email));
  
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const frame = snapshot.docs?.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    
const table=frame.map(({id,Key,stutes,createdAt})=>({id,Key,stutes,createdAt}))
console.log(table)
    setStatus(table);
  }, (error) => {
    console.error("Error getting documents:", error);
  });

  // Cleanup function
  return () => {
    unsubscribe();
  };
 },[])


 useEffect(() => {
        const q = query(productRef, orderBy("createdAt", "desc"));
  
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const frame = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          const table=frame.map(({id,Key,stutes,createdAt,role})=>({id,Key,stutes,createdAt,role}))
          console.log(table)
          setDatabase(table);
        }, (error) => {
          console.error("Error getting documents:", error);
        });
        
        // Cleanup function
        return () => {
          unsubscribe();
        };
    }, []);
useEffect(()=>{
  const check=database?.filter(({role})=>role==='Delete');
console.log(check)
if(check!=null){

  if(check[0]?.Key===auth.currentUser){
  auth.currentUser.delete().then(() => {    
      auths.notif('success','user deleted',1)
    }).catch((error) => {
    
      auths.notif('error',error,1)
    });
    deleteDoc(doc(db, "User", check[0]?.id));  
  }
}
  
},[database])
  return (
   
        <div className='flex w-full'>
        <div className={`${auths.publics===undefined?'w-[15%] h-screen bg-black text-white':'hidden'}`}>
        <SideNav stutesArray={userStates} navs={nav} nav={setNav}/>
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

 <Route path='/' element={<Home ar={ar} database={database} depar={depar} Club={Club} Faq={Faq}  />} />
 <Route path="*" element={<Navigate to='/' />} />
   </Routes>
            </div>
            </div>
        </div>
   
  )
}

export default Root