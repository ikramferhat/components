import React from 'react'
import { Menu, Parallax, Search } from '../components';

export  function SearchPage(){
  return (
    <div>
      <Search fixedsearch fixed bColor="#00cfff" />
      <div style={{ marginTop: 250 }} >
        <Search overlay bColor="#0d66d0" />
      </div>
    </div>
  )
}
export  function MenuPage(){
    return (
      <div>
        <Menu />
      </div>
    )
}
export  function ParallaxPage(){
    return (
      <div>
        <Parallax />
      </div>
    )
  }

