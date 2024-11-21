import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Fotter = () => {
  return (
    <div id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <h1>SURESH</h1>
            <p>
            Portfolio <br></br> | <a href="Suris6530@gmail.com">Suris6530@gmail.com</a>| support@suris6530@gmail.com
            </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscibe">Subscribe</div>
        </div>
      </div>
      <hr></hr>
      <div className="footer-bottom">
        <p className="footer-bottom-left">2023 suresh . All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privecy  Policy </p>
            <p>Connect with me</p>
        </div>
      </div>

    </div>
  )
}

export default Fotter
