import React, { useEffect, useState } from 'react'

import FORM from '../component/FORM'

function Department(props) {
   
  return (
    <div>
     <FORM Department={props.Department} pageTitle={props.pageTitle}/>
    </div>
  )
}

export default Department