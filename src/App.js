import logo from './logo.svg';
import './App.css';
import Landing from './page/Landing';
import Login from './page/Login';
import { BrowserRouter,HashRouter, Routes, Route, useParams } from "react-router-dom";
import Root from './page/Root';
import AR from './page/AR';
import TopNav from './component/TopNav';
import SideNav from './component/SideNav';
import Home from './page/Home';
import Department from './page/Department';
import Clubs from './page/Clubs';
import FAQs from './page/FAQs';
import { useState } from 'react';
import Signup from './page/Signup';

function App() {
 const {id} =useParams()
 console.log(id)
 const [nav, setNav]=useState(0);
  return (
    <BrowserRouter>
    
     <div className='flex w-full'>
      {/* {id!='/landing'?
       */}
  
        <div className='w-[15%] h-screen bg-black text-white'>
        
                <SideNav navs={nav} nav={setNav}/>
            </div>
          {/* :''
        } */}
            <div className='w-[90%] h-[40px] text-white'>
            <TopNav/>
    
            <div className='text-black'>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/landing/:id" element={<Landing />} />
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/AR' element={<AR/>} />
  <Route path='/faq' element={<FAQs FAQs='FAQs'  pageTitle="ALL FAQ's"/>} />
  <Route path='/onClub' element={<Clubs Department='Culb' pageTitle='ALL Club'/>} />
  <Route path='/department' element={<Department Department='Department' pageTitle='ALL Department' />}/>

  <Route path='/Home' element={<Home />} />
    </Routes>
    </div>
            </div>
           </div>
  </BrowserRouter>
  );
}

export default App;
