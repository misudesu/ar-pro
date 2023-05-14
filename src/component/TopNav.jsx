import React from 'react'
import logout from '../Asset/logout.png'
function TopNav() {
  return (
    <div>
        <div className='h-[50px]  bg-gray-200 '>
<div className='flex justify-end mr-8 items-center h-full'>
    <img className='w-6 h-6' src={logout} alt="" />
</div>
        </div>
    </div>
  )
}

export default TopNav