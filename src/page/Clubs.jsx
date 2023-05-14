import React from 'react'
import Table from '../component/Table'
import Button from '../component/Button'
import d1 from '../Asset/d1.png'
import d2 from '../Asset/d2.png'
function Clubs() {
    const table=[
        {id:1,title:'Digital Strategy',dic:'Digital Strategy...',image:d1},
        {id:2,title:'Digital Strategy',dic:'Digital Strategy...',image:d2},
        {id:1,title:'Digital Strategy',dic:'Digital Strategy...',image:d1},

    ]
  return (
    <div>
        <p className='mt-8 ml-8'>Club Page</p>
    <div>
        <div className='flex flex-col justify-center'>
            <div className='flex justify-end mr-8'>
            <Button type='submite' style='rounded-[8px] h-[40px] text-white w-[100px] bg-blue-500 mt-4 hover:bg-grey-200' onClick='' >New +</Button>

            </div>
            <div className='ml-8 border bottom-2 m-8'>
                <Table table={table} />
            </div>
        </div>
    </div>
</div>
  )
}

export default Clubs