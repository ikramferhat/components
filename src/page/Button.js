import React from 'react'
import './style.scss'

const Button = () => {
  return (
    <div className='btn-container'>
      <button className='btn-1'>
        button1
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <button className='btn-2'>
        button2
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <button className='btn-3'>
        button3
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  )
}

export default Button;