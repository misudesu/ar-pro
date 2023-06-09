import React from 'react'
import { Link } from 'react-router-dom'

function SideNav(props) {

    const item=[
        {name:'Home',id:0,link:'/'},
        {name:'AR Experience',id:1,link:'/AR'},
        {name:'Department',id:2,link:'/department'},
        {name:'Clube page',id:3,link:'/onClub'},
        {name:'FAQ’S',id:4,link:'/faq'}
    ]

  return (
    <div >
       <div className=' '>
      <div className='mt-[268px]'>
        {props.stutesArray?.length!=0&&props?.stutesArray[0]?.stutes!=true?
        <p className='text-center'>Contact Admin to get Permition and to see Navigation </p>
      :

<div className='flex flex-col space-y-5 text-center'>
    {item.map((item,index)=>(
     <Link className={`${item.id==props.navs?'p-4 bg-white text-black':''}`} to={item.link} onClick={()=>props.nav(index)}>
 <p   key={index}>{item.name }</p>
     </Link>  
    ))}
</div>
      }
      </div>
        </div> 
        </div>
  )
}

export default SideNav