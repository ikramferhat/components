import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Menu, Parallax, Search } from './components';
import {ParallaxPage, MenuPage, SearchPage, ButtonPage} from './page/mainPage'

const RouteConfig = () => {
    return (
      <Routes>
          <Route path='parallax' element={<ParallaxPage />} />
          <Route path='menu' element={<MenuPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='button' element={<ButtonPage />} />
      </Routes>
    )
  }
  
  export default RouteConfig;