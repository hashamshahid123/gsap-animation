import React from 'react'
import './Footer.css'
import mySvg from '../../assets/logo-footer.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-text'>
            <h5 className='text-ft'>Hi@ <br /> Hidokmeh <br /> .com</h5>
        </div>
        <div className="footer-icons">
            <div className='footer-logo'>
                <div className='logo-f'>
                    <img src={mySvg} alt="" style={{width: '17vw'}}/>
                </div>
                <h4>© 2023 All Rights Reserved</h4>
            </div>
            <div className='footer--text'>
                <p>HI@HIDOKMEH.COM</p>
                <p>+98 21 26 858 636</p>
                <p>+98 21 26 858 636</p>
                <p>Unit 14, No. 250, Niavaran St.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer