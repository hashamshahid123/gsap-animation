import React, { useEffect, useRef } from "react";
import "./ScrollCard.css";
import img1 from "../../assets/scr1.webp";
import img2 from "../../assets/scr2.webp";
import img3 from "../../assets/scr3.webp";
import img4 from "../../assets/scr4.webp";
import img5 from "../../assets/scr5.webp";
import img6 from "../../assets/scr6.webp";
import img7 from "../../assets/scr7.webp";
import img8 from "../../assets/scr8.webp";
import img9 from "../../assets/scr9.webp";
import img10 from "../../assets/scr10.webp";
import img11 from "../../assets/scr11.webp";
import img12 from "../../assets/scr12.webp";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const ScrollCard = () => {
  const processRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const process = processRef.current;

    if (process) {
      let sections = gsap.utils.toArray('.process__item');

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: process,
          markers: false,
          scrub: 1,
          pin: true,
          snap: 1 / (sections.length - 1),
          end: () => `+=${process.offsetWidth}`,
        },
      });
    }
  }, []);
  return (
    <>
    
<div className="process-wrap">
  <div className="process" ref={processRef}>
    <div className="process__item">
      <img src="https://picsum.photos/600/400" alt="Image"/>
    </div>
    <div className="process__item">
<img src="https://picsum.photos/600/400" alt="Image"/>
    </div>
    <div className="process__item">
      <img src="https://picsum.photos/600/400" alt="Image"/>
    </div>
    <div className="process__item">
      <img src="https://picsum.photos/600/400" alt="Image"/>
    </div>
    <div className="process__item">
      <img src="https://picsum.photos/600/400" alt="Image"/>
    </div>
    <div className="process__item">
      <img src="https://picsum.photos/600/400" alt="Image"/>
    </div>
  </div>
</div>

    </>
  );
};

export default ScrollCard;





