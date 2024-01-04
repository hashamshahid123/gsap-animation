import React, { useEffect, useRef } from "react";
import "./Header.css";
import myVideo from "../../assets/video.webm";
import myLogo from "../../assets/logo-christmas.png";
import { TiSocialDribbble } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialBehance } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import gsap, { Expo } from "gsap";


const Header = () => {
  const paraOneRef = useRef(null)
  const paraTwoRef = useRef(null)
  const paraThreeRef = useRef(null)
  const buttonRef = useRef(null)
  const boxRef = useRef(null)

  useEffect(() => {
    const paraOne = paraOneRef.current;
    const paraTwo = paraTwoRef.current;
    const paraThree = paraThreeRef.current;
    const button = buttonRef.current;
    const box = boxRef.current;

     gsap.fromTo(paraOne, {opacity: 0, y: 0}, {opacity: 1, y: -30, duration: 1, ease: Expo.easeInOut, delay: .3})
     gsap.fromTo(paraTwo, {opacity: 0, y: 0}, {opacity: 1, y: -30, duration: 1, ease: Expo.easeInOut, delay: .5})
     gsap.fromTo(paraThree, {opacity: 0, y: 0}, {opacity: 1, y: -30, duration: 1, ease: Expo.easeInOut, delay: .7})
     gsap.fromTo(button, {opacity: 0, y: 0}, {opacity: 1, y: -30, duration: 1, ease: Expo.easeInOut, delay: .9})
     gsap.fromTo(box, {opacity: 0, y: 0}, {opacity: 1, y: -30, duration: 1, ease: Expo.easeInOut, delay: 1.1})
  }, [])

  return (
    <div className="main">
      
      <video src={myVideo} autoPlay loop muted />
        <div className="main-logo">
          <img src={myLogo} alt="" className="logo"/>
          
        </div>
        <div className="nav-social">
            <div className="social">
                <span><TiSocialDribbble /></span>
                <span><FaWhatsapp /></span>
                <span><SlSocialLinkedin /></span>
                <span><SlSocialBehance/></span>
                <span><SlSocialInstagram /></span>
                <span><TiSocialYoutube/></span>
            </div>
            <nav className="nav">
                <a href="#">Projects</a>
                <a href="#">+982345120331</a>
                <a href="#">Contact Us</a>
            </nav>
        </div>
        <div className="main-contant">
            <p className="main-p1" ref={paraOneRef}>Award winning ✨</p>
            <h1 className="main-h1" ref={paraTwoRef}>Digital Creative Agency</h1>
            <p className="main-p2" ref={paraThreeRef}>making tailor-made interactive website and experiences</p>
            <div className="main-button" ref={buttonRef}>
                <a href="#" className="main-btn-1">  Let's Talk 🤙🏽</a>
                <a href="" className="main-btn-2"> Our Portfolio </a>
            </div>
        </div>
        <div className="main-box" ref={boxRef}>
          <p>Why Choose us? ↗</p>
          <p> Our team has achieved an incredible milestone with over </p>
        </div>
    </div>
  );
};

export default Header;
