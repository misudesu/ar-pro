import React from 'react'
import Button from './Button'

function ArTable(props) {
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
                {props.table?.map((data,index)=>(
                    <>

<tr key={index} className={(index%2)?'':'bg-blue-300'}>

    <td  className='p-2'>
{index+1}
    </td>
  
    <td className='p-2'>
        <div className='flex gap-4 items-center'>
            <img className='w-20 h-12' src={data.Image} alt="" />
            <p> {data.Title}</p>
        </div>
       
        </td>
    <td className='p-2 '>
        <p className='truncate' style={{
             whiteSpace: 'nowrap',
             overflow: 'hidden',
             textOverflow: 'ellipsis',
       maxWidth:'150px'
        }}>
             {data.Discription}{data.SubTitle}
        </p>
      
        </td>
    <td className='p-2'>
        <div className='flex gap-4'>
        <Button type='submite' style='h-[30px] text-red font-bold w-[100px] border border-1 border-red-500  mt-4 hover:bg-grey-200' onClick={()=>props.Delete(data.id,data.image,data.frontVideo,data.backVideo,data.PDF)} >Delete</Button>
        {/* <Button type='submite' style='h-[30px] text-green-500 font-bold w-[100px] border border-1 border-green-500  mt-4 hover:bg-grey-200'  >Update</Button> */}

        </div>
    </td>
</tr>

                </>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ArTable