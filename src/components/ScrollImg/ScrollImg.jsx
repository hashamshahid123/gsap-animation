import React from 'react';
import './ScrollImg.css'
import img1 from '../../assets/fma-thumb-2-1.webp'

const ScrollImg = () => {
 
      return (
        <>
        <div className='container'>
          <div className="pinned-image">
            <img src={img1} alt="" className='img'/>
          </div>
          </div>
        </>
      );
    }

export default ScrollImg