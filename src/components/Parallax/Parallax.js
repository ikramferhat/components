import React from 'react'
import './style.scss';

const Parallax = () => {
  return (
    <div className='main-para'>
      <div className='parallax-video'>
        <video autoPlay loop muted>
          <source src={'https://videocdn.cdnpk.net/cdn/content/video/premium/partners0292/large_preview/230324_02_Mumbai_4k_016.mp4?filename=4784484_Mumbai_India_hotel_3840x2160.mp4'} type="video/mp4" />
        </video>
        <div className='paper-txt md-paper'>
          <h1>Video Parallax</h1>
        </div>
      </div>
      <div className='paper-txt'>
        <h1>Image Parallax</h1>
        <div className='parallax-img'></div>
      </div>
    </div>
  )
}

export default Parallax;