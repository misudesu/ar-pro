import React from 'react'

function TextArea(props) {
  return (
    <div className='flex flex-col '>
        <label className={`${props.styleLabel}`}>{props.lable} </label>
        <textarea value={props.value} rows={8} cols={50} type={props.type} placeholder={props.placeholder} className={`${props.style}`} name={props.name} onChange={props.handleChange}>

        </textarea>
    </div>
  )
}

export default TextArea