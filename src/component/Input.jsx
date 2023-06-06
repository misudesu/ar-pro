import React from 'react'

function Input(props) {
  return (
    <div className='flex flex-col '>
        <label className={`${props.styleLabel}`}> {props.lable} </label>
        <input hidden={props.hidden} id={props.id}  accept={props.accept} value={props.value} type={props.type} placeholder={props.placeholder} className={`${props.style}`} name={props.name} onChange={props.handleChange}/>
    </div>
  )
}

export default Input