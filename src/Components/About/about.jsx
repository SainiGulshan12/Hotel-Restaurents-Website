import React from 'react';
import './about.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook,faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';



const About = () => {
  return (
    <div className='about section' id='about'>
      <div className="delivery">
        <div className="overlay"></div> 
        <div className="content">
          <h3>WE GUARANTEE</h3>
          <h1>30 Minutes Delivery!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Esse, unde!</p>
          <p>Impedit nesciunt expedita natus eius, neque molestias.</p>
          <Link to='contact' ><button  className='call'>Call : 035-056-035</button></Link>
        </div>
      </div>
      <div className="contact">
        <div className="locat">
          <h3>LOCATION</h3>
          <p>Vaishali nagar,B block</p>
          <p>Sector 15 Jaipur,</p>
          <p>Rajasthan </p>
        </div>
        <div className="workinghou">
          <h3>WORKING HOURS</h3>
          <p>Mon-Fri : 9:00AM - 9:00PM </p>
          <p>Saturday : 10:00AM - 8:30PM</p>
          <p>Sunday : 11:00AM - 5:00PM</p>
        </div>
        <div className="order">
          <h3>ORDER NOW</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <h2>035-056-035</h2>
        </div>
        <div className="follow">
          <h3>FOLLOW US ON</h3>
          <p><FontAwesomeIcon icon={faInstagram} className='i'/></p>
          <p><FontAwesomeIcon icon={faFacebook} className='i'/></p>
          <p><FontAwesomeIcon icon={faTwitter} className='i'/></p>
          <p><FontAwesomeIcon icon={faYoutube} className='i'/></p>
        </div>
      </div>
    </div>
  )
}

export default About;