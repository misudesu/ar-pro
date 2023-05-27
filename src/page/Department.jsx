import React, { useEffect, useState } from 'react'

import FORM from '../component/FORM'
import { useParams } from 'react-router-dom';
import { useAuth } from '../Fanction/AuthProvider';
import DepartmentForm from '../component/DepartmentForm';

function Department(props) {
 
  return (
    <div>

     <DepartmentForm Department={props.Department} pageTitle={props.pageTitle} />
    </div>
  )
}

export default Department