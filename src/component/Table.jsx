import React from 'react'
import Button from './Button'

function Table(props) {
  return (
    <div>
        <table className='w-full text-start'>
            <thead>
                <tr className=' text-start'>
                    <th className='p-2 text-start'>No</th>
                    <th className='p-2 text-start'>Titile</th>
                    <th className='p-2 text-start'>Discription</th>
                    <th className='p-2 text-start'>Action</th>
                </tr>
            
            </thead>
            <tbody>
                {props.table.map((data,index)=>(
                    <>
{(index%2)?
<tr key={index} className=''>

    <td  className='p-2'>
{data.id}
    </td>
  
    <td className='p-2'>
        <div className='flex gap-4 items-center'>
            <img className='w-20 h-12' src={data.image} alt="" />
            <p> {data.title}</p>
        </div>
       
        </td>
    <td className='p-2'>{data.dic}</td>
    <td className='p-2'>
        <div className='flex gap-4'>
        <Button type='submite' style='h-[30px] text-red font-bold w-[100px] border border-1 border-red-500  mt-4 hover:bg-grey-200' onClick='' >Delete</Button>
        <Button type='submite' style='h-[30px] text-green-500 font-bold w-[100px] border border-1 border-green-500  mt-4 hover:bg-grey-200' onClick='' >Update</Button>

        </div>
    </td>
</tr>
:
<tr key={index} className='bg-blue-100'>

<td  className='p-2'>
{data.id}
</td>

<td className='p-2'>
    <div className='flex gap-4 items-center'>
        <img className='w-20 h-12' src={data.image} alt="" />
        <p> {data.title}</p>
    </div>
   
    </td>
<td className='p-2'>{data.dic}</td>
<td className='p-2'>
    <div className='flex gap-4'>
    <Button type='submite' style='rounded-[8px] h-[30px] text-red font-bold w-[100px] border border-1 border-red-500  mt-4 hover:bg-grey-200' onClick='' >Delete</Button>
    <Button type='submite' style='rounded-[8px] h-[30px] text-green-500 font-bold w-[100px] border border-1 border-green-500  mt-4 hover:bg-grey-200' onClick='' >Update</Button>

    </div>
</td>
</tr>
}
                </>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table