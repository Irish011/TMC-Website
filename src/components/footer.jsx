import React from 'react';
// import {FaMapLocationDot} from 'react-icons/fa6';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from '../images/logo-1.png';
import { SocialIcon } from 'react-social-icons';
import {CiLocationOn} from "react-icons/ci";

<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
</head>

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-img">
        <LazyLoadImage className="logo-footer" src={Logo}/>
        {/* <img src ={Logo} className="logo-footer"/> */}
      </div>
      <div className="footer-content">
        <div className="footer-location">
          {/* <FaMapLocationDot className="footer-icons"/>  */}
          <CiLocationOn  style={{fontSize: '8.5rem'}}/>
          <div className='locationinfo'> 404, Pramukh Tangent, 
          Sargasan Cross Rd, 
          Sargasan, Gandhinagar, Gujarat 382355 </div>
        </div>
        <div className="footer-social-media">
          <div className='social-others'>

            <SocialIcon className="footer-icons" url="https://www.youtube.com"/>
            <SocialIcon className="footer-icons" url="https://www.linkedin.com"/>
            <SocialIcon className="footer-icons" url="https://www.instagram.com"/> 
          {/* </div> */}
            {/* <div className="social"> */}
              {/* <div> */}
                <SocialIcon className="footer-icons" url="https://www.accounts.google.com/mail" network='mailto' bgColor='white' fgColor="black"/>
              {/* </div>   */}
              {/* <div className='mailinfo'>info@thatsmycraft.com</div> */}
            </div>
            
        </div>
      </div>
      <div className='map-footer'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.3860367602942!2d72.61347927499637!3d23.19259807905489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395dd4d8bc202f15%3A0xd7d28eed008ca37f!2sThats%20My%20Craft!5e0!3m2!1sen!2sin!4v1694258458707!5m2!1sen!2sin" 
            width="500" 
            title='google-map'
            height="240" style={{border:'0', opacity: '0.9'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Footer;
