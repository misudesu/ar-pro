import React from 'react'
import logout from '../Asset/logout.png'
import { signOut } from 'firebase/auth'
import { storage, db, auth } from "../Server/Config";
function TopNav() {

  return (
    <div>
        <div className='h-[50px]  bg-gray-200 '>
<div onClick={()=>{signOut(auth)}} className='flex justify-end mr-8 items-center h-full'>
    <img className='w-6 h-6' src={logout} alt="" />
</div>
        </div>
    </div>
  )
}

export default TopNav