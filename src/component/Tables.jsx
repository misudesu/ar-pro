import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { useAuth } from '../Fanction/AuthProvider';


import { auth, db } from '../Server/Config';
import { collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
function Tables(props) {
    let navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
  const auths=useAuth();
  const [key,setKey]=useState()
function Actives(Active,docId){
   const userinfo = doc(db, "User",docId);
   setShowModal(false)
  updateDoc(userinfo, {
    stutes: !Active,
  });
  auths.notif('success','user Status updated',1)
    }
    const user = auth.currentUser;
   function Delete(){
    const userinfo = doc(db, "User",key);
   // updateProfile(auth.currentUser, { displayName:'Delete' }) 
    updateDoc(userinfo, {
        role: 'Delete',
        stutes:false
      });
   //  deleteDoc(doc(db, "User", key));  

        //       user.delete().then(() => {
            
        //     auths.notif('success','user deleted',1)
        //   }).catch((error) => {
          
        //     auths.notif('error',error,1)
        //   });
    }
  
    const DELETE=(user)=>{
        setShowModal(true)
      
        setKey(user);
    }
    const [open,setOPEN]=useState(false);
    function menu(index){
        if(index!=auths.visibleCMenu){
            auths.SetVisible(index)
            setOPEN(!open);
        }else{
            auths.SetVisible(0)
            setOPEN(!open);
        }
       
    }


   

  return (
    <table className="w-full dark:bg-black dark:text-white mb-5 ">
        {auths.contextHolder}
    <tr className="border border-solide h-[40px] hover:text-black hover:bg-gray-100 dark:hover:text-black ">
       {props.Thead?.map((data,index)=>(
 <th key={index} className=''> 
   <div className="flex gap-2 p-2 items-center w-full">
    <p className=' text-[14px]'>{data.title}</p>
    <svg  width="8" height="10" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.292787 5.70679C0.105316 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105316 4.48031 0.292787 4.29279L4.29279 0.292786C4.48031 0.105315 4.73462 0 4.99979 0C5.26495 0 5.51926 0.105315 5.70679 0.292786L9.70679 4.29279C9.88894 4.48139 9.98974 4.73399 9.98746 4.99619C9.98518 5.25838 9.88001 5.5092 9.6946 5.6946C9.5092 5.88001 9.25838 5.98518 8.99619 5.98746C8.73399 5.98974 8.48139 5.88894 8.29279 5.70679L5.99979 3.41379V14.9998C5.99979 15.265 5.89443 15.5194 5.70689 15.7069C5.51936 15.8944 5.265 15.9998 4.99979 15.9998C4.73457 15.9998 4.48022 15.8944 4.29268 15.7069C4.10514 15.5194 3.99979 15.265 3.99979 14.9998V3.41379L1.70679 5.70679C1.51926 5.89426 1.26495 5.99957 0.999786 5.99957C0.734622 5.99957 0.480314 5.89426 0.292787 5.70679V5.70679Z" fill="#DBDBDB"/>
</svg>
<svg width="8" height="10" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.71929 10.293C9.90676 10.4805 10.0121 10.7348 10.0121 11C10.0121 11.2652 9.90676 11.5195 9.71929 11.707L5.71929 15.707C5.53176 15.8945 5.27745 15.9998 5.01229 15.9998C4.74712 15.9998 4.49282 15.8945 4.30529 15.707L0.305288 11.707C0.209778 11.6148 0.133596 11.5044 0.0811869 11.3824C0.0287779 11.2604 0.00119157 11.1292 3.77571e-05 10.9964C-0.00111606 10.8636 0.0241854 10.7319 0.0744663 10.609C0.124747 10.4861 0.199 10.3745 0.292893 10.2806C0.386786 10.1867 0.498438 10.1125 0.621334 10.0622C0.74423 10.0119 0.87591 9.9866 1.00869 9.98775C1.14147 9.9889 1.27269 10.0165 1.39469 10.0689C1.5167 10.1213 1.62704 10.1975 1.71929 10.293L4.01229 12.586V1C4.01229 0.734784 4.11765 0.48043 4.30518 0.292893C4.49272 0.105357 4.74707 0 5.01229 0C5.2775 0 5.53186 0.105357 5.71939 0.292893C5.90693 0.48043 6.01229 0.734784 6.01229 1V12.586L8.30529 10.293C8.49282 10.1055 8.74712 10.0002 9.01229 10.0002C9.27745 10.0002 9.53176 10.1055 9.71929 10.293Z" fill="#8E98A8"/>
</svg>
   </div>
        </th>
       ))}
        <th></th>
    </tr>
   {props.currentItems?.length>0&&props.currentItems?.map((data,index)=>(
    <tr key={index} className="border border-solide h-[40px] hover:text-black hover:bg-gray-100 dark:hover:text-black "  >
    <td className="pl-2 flex items-center  ">
    <div className="m-1 w-[25px] h-[25px]  bg-[#FFA8A7] rounded-full flex justify-center  items-center">
<p className="progres plus-700 lh-15 text-[10px] text-white">{data.Key?.charAt(0)}</p>
                            </div>
        {data.Key} </td>
    
    <td className="">{data.role}</td>  
    <td className="flex items-center  gap-4 mt-2 text-white">
        {data?.stutes!=true?
        <p className=" rounded-[6px] text-[14px] px-2 py-1 w-20 text-center text-[#CC0905] bg-[#FFEFEB] "  >Un-Active</p>
         :
<p  className=" rounded-[6px] text-[14px] px-2 py-1 w-20 text-center text-[#119C2B] bg-[#EBFFF1]"  >Active</p>
}

    </td>
    <td className="relative">
    <div onClick={()=>menu(index+1)} className='flex items-center relative'>
    <div className='flex justify-center cursor-pointer relative' >
      <div className='  rounded-b-full py-1   flex' > 
      <button name='team' ><BsThreeDotsVertical className='text-black ' size={20}/></button>
       </div>
      </div> 
      {index+1!=auths.visibleCMenu?
    '':
    <div className='flex flex-col gap-1  absolute ml-10  '>
         {user.displayName==='Admin'?'':
    <>
    {user?.displayName==='Owner'?
     <> {data.stutes!=true?
<a onClick={()=>Actives(data.stutes,data.id)}  className='border  px-4 w-[100px]  rounded-md text-[10px] text-[#667085] dark:text-white dark:last:text-[#fff] last:text-[#007F6D] hover:font-bold' target="_blank" >Activet  </a>
:
<a onClick={()=>Actives(data.stutes,data.id)} className='border px-4 w-[100px]   rounded-md text-[10px] text-[#667085] dark:text-white dark:last:text-[#fff] last:text-[#007F6D]  hover:font-bold' target="_blank" >Un-Activet</a>
}
</>
:user.displayName!='Owner'?'':<> 
    <a onClick={()=>Actives(data.stutes,data.id)}  className='border  px-4 w-[100px]  rounded-md text-[10px] text-[#667085] dark:text-white dark:last:text-[#fff] last:text-[#007F6D] hover:font-bold' target="_blank" >Activet {data.stutes} </a>
    
    <a onClick={()=>Actives(data.stutes,data.id)} className='border px-4 w-[100px]   rounded-md text-[10px] text-[#667085] dark:text-white dark:last:text-[#fff] last:text-[#007F6D]  hover:font-bold' target="_blank" >Un-Activet</a>
    
    </>}

</>
}
{user?.displayName==='Owner'?
<div className='  cursor-pointer' onClick={()=>DELETE(data.id)}>
      <p className='border px-4 text-[10px] w-[100px]  rounded-md text-[#667085] last:text-red-500  hover:font-bold'>Delete</p>
      </div>    
:''
    }
      </div> 
    }
    </div>
    </td>

  </tr>
   ))}
  
  {showModal && (
        <div onClick={() => setShowModal(false)}  className="modal fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
      flex justify-center items-center
        ">
          <div className="modal-content bg-white px-8 py-2  rounded-md ">
            <p className='mt-8'> Are you shure you want to delete this ?</p>
            <div className='flex gap-5 mt-10 mb-1 items- justify-end'>
            <button className='bg-purple-500 h-6 text-white w-16 rounded-sm' onClick={() => setShowModal(false)}>No</button>
            <button className='bg-red-500 h-6 text-white w-16 rounded-sm' onClick={()=>Delete()}>Yes</button>
            </div>
           
          </div>
        </div>
      )}
</table>
  )
}

export default Tables