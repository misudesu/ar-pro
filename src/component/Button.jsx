import React from 'react'

function Button(props) {
  return (
    <div>
        <button onClick={props.onClick} className={`${props.style}`}>{props.children}</button>
    </div>
  )
}

export default Button