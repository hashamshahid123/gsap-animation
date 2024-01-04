import React, { useEffect, useRef } from "react";
import "./RevealImg.css";
import gsap from "gsap";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealImg = () => {

    useEffect(() => {
      
        const revealElements = document.querySelectorAll(".reveal");
    
        revealElements.forEach((element) => {

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              start: "top 100%",
                end: "bottom 70%",
              toggleActions: "play reverse play reverse",
            }
          });
          tl.set(element, {autoAlpha: 1})
          tl.fromTo( element,{ opacity: 0, x: -100 },{opacity: 1, x: 0, duration: 1.5, scale: 1.3, delay: -1.5 ,ease: Power2.easeOut,
        
            }
          );
        });
      }, []);

  
 
  return (
    <div className="rev">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="reveal">
            </div>
          </div>
          <div className="col-lg-6">
            <div className="reveal" >
              <img src={img1} alt="" className="reveal-img" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="reveal">
            <img src={img2} alt="" className="reveal-img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="reveal"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="reveal"></div>
          </div>
          <div className="col-lg-6">
            <div className="reveal"><img src={img3} alt="" className="reveal-img" /></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="reveal"><img src={img4} alt="" className="reveal-img" /></div>
          </div>
          <div className="col-lg-6">
            <div className="reveal"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="reveal"></div>
          </div>
          <div className="col-lg-6">
            <div className="reveal"><img src={img5} alt="" className="reveal-img" /></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="reveal"><img src={img6} alt="" className="reveal-img" /></div>
          </div>
          <div className="col-lg-6">
            <div className="reveal"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="reveal"></div>
          </div>
          <div className="col-lg-6">
            <div className="reveal"><img src={img7} alt="" className="reveal-img" /></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="reveal"><img src={img8} alt="" className="reveal-img" /></div>
          </div>
          <div className="col-lg-6">
            <div className="reveal"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="reveal"></div>
          </div>
          <div className="col-lg-6">
            <div className="reveal"><img src={img9} alt="" className="reveal-img" /></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="reveal"><img src={img10} alt="" className="reveal-img" /></div>
          </div>
          <div className="col-lg-6">
            <div className="reveal"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevealImg;
