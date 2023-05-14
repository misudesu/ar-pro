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
      <Route path="/root" element={<Login/>} />
      <Route path="/landing/:id" element={<Landing />} />
  <Route  path='/' element={<Root/>} />
  <Route path='/AR' element={<AR/>} />
  <Route path='/faq' element={<FAQs/>} />
  <Route path='/onClub' element={<Clubs/>} />
  <Route path='/department' element={<Department/>}/>

  <Route path='/Home' element={<Home/>} />
    </Routes>
    </div>
            </div>
           </div>
  </BrowserRouter>
  );
}

export default App;
