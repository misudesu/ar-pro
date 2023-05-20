import logo from './logo.svg';
import './App.css';
import Landing from './page/Landing';
import Login from './page/Login';
import { BrowserRouter,HashRouter, Routes, Route, useParams, Navigate, Router } from "react-router-dom";
import Root from './page/Root';
import AR from './page/AR';
import TopNav from './component/TopNav';
import SideNav from './component/SideNav';
import Home from './page/Home';
import Department from './page/Department';
import Clubs from './page/Clubs';
import FAQs from './page/FAQs';
import { useEffect, useState } from 'react';
import Signup from './page/Signup';
import { useAuthState } from 'react-firebase-hooks/auth';

import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { auth, db } from './Server/Config'

import { Link } from 'react-router-dom'
import {AuthProvider, useAuth} from './Fanction/AuthProvider';
function App() {
  const auths=useAuth();
 
 
 
 const [nav, setNav]=useState(0);
 const [showNav, setShowNav] = useState(true);
 const [user] = useAuthState(auth);
 //
 const [users] = useAuthState(auth);
  
  return (
    <AuthProvider>
    <BrowserRouter>
      {!user ? (
<>

{   showNav &&

<Routes>
 
  <Route path="/" element={<Login/>} />
 <Route path='/signup' element={<Signup/>}/>
 {/* <Route path="*" element={<Navigate to='/' />} />
  */}

</Routes>
}
</>
):(
  
    
    <Root/>
 
  )}
  </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
