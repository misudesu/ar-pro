import React, { useEffect, useState } from 'react'

import FORM from '../component/FORM'
import { useParams } from 'react-router-dom';
import { useAuth } from '../Fanction/AuthProvider';

function Department(props) {
 
  return (
    <div>
     <FORM Department={props.Department} pageTitle={props.pageTitle}/>
    </div>
  )
}

export default Department