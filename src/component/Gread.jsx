import React, { useState } from 'react'
import data from '../Data/Data'

function Gread () {
    const [form,setForm]=useState([]);
    const [eachCreadt,setCreadt]=useState([]);
    const [gread,setGread]=useState();
    const [creadt,setNewCreadt]=useState();
    const [result,setResult]=useState();
    const [total,setTotal]=useState()
    const subjects=form
    function add(e){
       setGread(e.target.value);
       
    }
    function Push(){
        setForm(previous => [...form, gread])
        setCreadt(previous => [...eachCreadt, creadt])
      //  subjects.push(form.subject)
        console.log(subjects);
    }
 function creadts(e){
    setNewCreadt(e.target.value) ; 
    }
    function Total(e){
      setTotal(e.target.value);  
    }
  function Calculeter(){
  


    const result = form.map((value, index) => value * eachCreadt[index]);
    const sum = result.reduce((a, b) => a + b);
const finalResult = sum / total;
    setResult(finalResult)
    console.log(finalResult)
  }
  
  return (
    <div >
        <div>
        <div className=''>
            <p className='text-center G-title font-Pop font-normal text-[96px]'>Grade Calculator</p>
        </div>
        <div className='text-white mr-[89px] ml-[79px] mt-[93px]'>
            <div className='flex items-end justify-end font-Pop font-normal'>
                <p className='text-[24px]'> See how much you could <br/> <span className='text-[20px]'>

 achieve from your plan
                </span>
 </p>
            </div>
            <div className='flex gap-8 m-32'>
<div className='grid grid-cols-3 gap-4'> 
{data.Gcal.map((data,index)=>(
    <div key={index}>
        <p className='text-white font-bold font-poet text-[32px] p-2'>{data.value}</p>
        </div>
))}
</div>
<div className='flex flex-col gap-8'>
   <p className='text-white'> {subjects},{eachCreadt}</p> 
<div className='flex gap-4 '>
<input className='h-[50px] w-[200px] text-black px-4' name='subject' placeholder='cours gread' type='text' onChange={add}/> 
    <input className='h-[50px] w-[100px] text-black px-4' placeholder='cours creadt hour' name='calculeter' type='text' onChange={creadts}/>
</div>
<input className='h-[50px] w-[200px] text-black px-4' placeholder='total creadt hour' name='calculeter' type='text' onChange={Total}/>
    <button className='h-[50px] w-[300px] border-spacing-1 border border-[#87DEBF]' type='submite' onClick={Push} >Add</button>

<div className='Scard flex items-center justify-center w-[300px] h-[50px]'>
<p className='text-white text-[24px]' onClick={Calculeter} >Calculate</p>
  
        </div>
        <p className='text-[32px] text-white font-normal font-Pop'>GPA {result}</p>
 
</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Gread 
