import React, { useState } from 'react';
import './style.scss';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open)
  }
  return (
    <div className='menu-container'>
      <div className={`menu ${open ? 'active' : 'hidden'}`} >
        <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
        <a href='#'><i class="fa-brands fa-github"></i></a>
        <a href='#'><i class="fa-brands fa-twitter"></i></a>
        <a href='#'><i class="fa-brands fa-telegram"></i></a>
        <a href='#'><i class="fa-brands fa-linkedin"></i></a>
      </div>
      <button className="share" onClick={openMenu}>
        <i class={`fa-solid ${open ? "fa-xmark open" : "fa-share-nodes close"}`}></i>
      </button>
    </div>
  )
}

export default Menu;