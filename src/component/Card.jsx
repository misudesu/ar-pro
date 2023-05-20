import React from 'react'
import card from '../Asset/card.png'
function Card(props) {
  return (
    <div className=' w-[456px] h-[418px]'>
        <div className='    '>
            <img className=' object-cover w-full h-[270px]' src={props.img} alt="" />
            <div className='BG-card'>
                <p className='text-center text-[36px] font-Pop p-4 text-white'>{props.title}</p>
                <p className='text-white text-center text-[24px] font-Pop p-2'
               style={{
                whiteSpace: 'normal',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
             }}
                >{props.desc}</p>
            </div>
        </div>

    </div>
  )
}

export default Card