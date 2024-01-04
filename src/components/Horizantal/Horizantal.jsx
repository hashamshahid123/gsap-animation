import React, { useEffect, useRef } from "react";
import "./Horizantal.css";
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
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Horizantal = () => {
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      triggerRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
      }
      pin.kill();
    };
  }, []);

  return (
    <>
      <div className="outer">
        <div className="slider" ref={triggerRef}>
          <section style={{ display: "flex" }}>
            <div className="inner">
              <img src={img1} alt="FISH" className="fish img-1" />
            </div>
            <div className="inner">
              <img src={img2} alt="FISH" className="fish img-2" />
            </div>
            <div className="inner">
              <img src={img3} alt="FISH" className="fish img-3" />
            </div>
            <div className="inner">
              <img src={img4} alt="FISH" className="fish img-4" />
            </div>
            <div className="inner">
              <img src={img5} alt="FISH" className="fish img-5" />
            </div>
            <div className="inner">
              <img src={img6} alt="FISH" className="fish img-6" />
            </div>
            <div className="inner">
              <img src={img7} alt="FISH" className="fish img-7" />
            </div>
            <div className="inner">
              <img src={img8} alt="FISH" className="fish img-8" />
            </div>
            <div className="inner">
              <img src={img9} alt="FISH" className="fish img-9" />
            </div>
            <div className="inner">
              <img src={img10} alt="FISH" className="fish img-10" />
            </div>
            <div className="inner">
              <img src={img11} alt="FISH" className="fish img-11" />
            </div>
            <div className="inner">
              <img src={img12} alt="FISH" className="fish img-12" />
            </div>
          </section>
        </div>

        <div class="marqueess">
        <div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            veniam?
          </div>
          <div>Consectetur adipisicing elit. Porro, obcaecati.</div>
          <div>
            Error vel, obcaecati eligendi possimus, accusamus minima magni nobis
            excepturi consectetur animi sit.
          </div>
        </div>
      </div>
      </div>

      
    </>
  );
};

export default Horizantal;
