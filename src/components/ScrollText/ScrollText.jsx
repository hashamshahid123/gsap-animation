import React, { useEffect, useRef } from 'react'
import './ScrollText.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const ScrollText = () => {

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeText = marqueeRef.current.querySelector('.marquee-text');
    const w = marqueeText;

    const [x, xEnd] = ['0%', (w.scrollWidth - marqueeRef.current.offsetWidth) * -0.5];

    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: marqueeRef.current,
        scrub: 0.5
      }
    });
  }, []);

    
  return (
    <div className='scroll-main'>
        <div className="murquree">
          <div className="overFlow">
            <div className="marquee" ref={marqueeRef}>
              <div className="marquee-text">
               We Are Working
              </div>
            </div>
            <div className="spacer"></div>
          </div>
        </div>

        <div className='container'>
        <div className='scroll-box'>
          <div className="row">
            <div className="col-lg-3">
            <div className='box1' style={{marginRight:'60vw'}}>
                <span>Over</span>
                <h1>40+</h1>
                <p>Acoolades and <br /> counting</p>
            </div>
            </div>
            <div className="col-lg-3">
            <div className='box2'>
            <span>Over</span>
                <h1>300+</h1>
                <p>Acoolades and <br /> counting</p>
            </div>
            </div>
            <div className="col-lg-3">
            <div className='box3'>
            <span>Over</span>
                <h1>105+</h1>
                <p>Acoolades and <br /> counting</p>
            </div>
            </div>
            <div className="col-lg-3">
            <div className='box4'>
            <span>Over</span>
                <h1>40+</h1>
                <p>Acoolades and <br /> counting</p>
            </div>
            </div>
          </div>
        </div>    
        </div>
    </div>
  )
}

export default ScrollText