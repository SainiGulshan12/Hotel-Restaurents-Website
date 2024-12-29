import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook,faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>

        <div className="foot">
            <p className='omg'>&copy; 2024 <a href="#home">OMG Hotel & Restaurants</a> All Rights Reserved</p>
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>
        <div className="owner">
            <p className='create'>Created By Gulshan Saini</p>
          <div className="social">
            <p><FontAwesomeIcon icon={faInstagram} className='i'/></p>
            <p><FontAwesomeIcon icon={faFacebook} className='i'/></p>
            <p><FontAwesomeIcon icon={faTwitter} className='i'/></p>
            <p><FontAwesomeIcon icon={faYoutube} className='i'/></p>
          </div>
        </div>

    </footer>
  )
}

export default Footer;