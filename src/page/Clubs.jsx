import React from 'react'
import Table from '../component/Table'
import Button from '../component/Button'
import d1 from '../Asset/d1.png'
import d2 from '../Asset/d2.png'
import FORM from '../component/FORM'
function Clubs(props) {
    const table=[
        {id:1,title:'Digital Strategy',dic:'Digital Strategy...',image:d1},
        {id:2,title:'Digital Strategy',dic:'Digital Strategy...',image:d2},
        {id:1,title:'Digital Strategy',dic:'Digital Strategy...',image:d1},

    ]
  return (
    <div>
       <FORM Department={props.Department} pageTitle={props.pageTitle}/>
</div>
  )
}

export default Clubs