import React from 'react'
import Table from '../component/Table'
import Button from '../component/Button'
import d1 from '../Asset/d1.png'
import d2 from '../Asset/d2.png'
import FORM from '../component/FORM'
import { useParams } from 'react-router-dom'
import { useAuth } from '../Fanction/AuthProvider'
function Clubs(props) {
  const {demo} =useParams()
 const auths=useAuth();
 auths.updateDemo(demo)
 
  
  return (
    <div>
       <FORM Department={props.Department} pageTitle={props.pageTitle}/>
</div>
  )
}

export default Clubs