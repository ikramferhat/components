import React, { useState } from 'react';
import './style.scss';

const Search = (props) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.target.value);
    console.log('value is:', event.target.value);
  }

  const openSearchBar = () => {
    setSearchOpen(!searchOpen);
  };

  const openOverlay = () => {
    setOverlay(!overlay);
  };

  return (
    <>
      <nav className={props.fixed && 'fixed'}>
        <div className='navbar' style={{ backgroundColor: props.bColor}}>
          <h3>{props.fixed ? 'Fixed Search bar' : 'Fullscreen Search Box'}</h3>
          <span onClick={() => {props.overlay ? openOverlay() : openSearchBar()}}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        {props.fixedsearch && 
          <div className={`searchcontainer ${ searchOpen  ? 'visible' : 'hidden' }`}>
            <input type="text" value={search} onChange={handleChange} placeholder="Search here..." />
            <span onClick={openSearchBar} >
              <i class="fa-solid fa-xmark"></i>
            </span>
          </div>
        }
        {props.overlay && 
          <div onClick={() => setOverlay(false)} className={`overlay ${ overlay ? 'fadein' : 'fadeout'}`}>
            <div className='container'>
              <h3>What are you looking for?</h3>
              <span className='top-cross' onClick={openOverlay} >
                <i class="fa-solid fa-xmark"></i>
              </span>
              <div onClick={(e) => {e.stopPropagation();}} className='input-container'>
                <input type="text" value={search}  onChange={handleChange} placeholder="Search here..." />
                <span>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                {search !== '' &&
                  <div className='search-result'>
                    <div>search...</div>  
                  </div>
                }
              </div>
              
            </div>
          </div>
        }
      </nav>
    </>
  )
}

export default Search;