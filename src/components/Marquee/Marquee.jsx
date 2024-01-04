import React, { useEffect } from "react";
import "./Marquee.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
    useEffect(() => {
        const marqueeAnimation = () => {
          const sections = document.querySelectorAll(".marquees");
          sections.forEach((section) => {
            const marqueeText = section.querySelector(".marquees-text");
            const w = marqueeText; // Assign marqueeText element to w
    
            const [x, xEnd] = ['0%', (w.scrollWidth - section.offsetWidth) * -0.5];
    
            gsap.fromTo(w, { x }, {
              x: xEnd,
              scrollTrigger: {
                trigger: section,
                scrub: 0.5
              }
            });
          });
        };
    
        marqueeAnimation();
      }, []);
  return (
    <div style={{overflowX: "hidden"}}>
      <div className="spacer"></div>
      <div className="marquees">
        <div className="marquees-text">
          WE WE WE WE WE WE WE WE WE
        </div>
      </div>
      <div className="marquees">
        <div className="marquees-text">
          Creat Creat Creat Creat Creat Creat Creat Creat Creat
        </div>
      </div>
      <div className="marquees">
        <div className="marquees-text">
          Brands Websites & Brand Websites & Brand Websites
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default Marquee;
