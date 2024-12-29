import React from 'react';
import './review.css';
import john from '../../images/john.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Review = () => {
  return (
    <div className="section review" id='review'>
        <div className="head">
          <h1>Customer's <span>Review</span></h1>
        </div>
        <div className="customer">
          <div className="cust">
            <FontAwesomeIcon icon={faQuoteRight} className='i'  />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum, ex nulla fuga cumque odio dignissimos nobis aliquid dolores praesentium?</p>
            <img src={john} alt="john" />
            <p>John Deo</p>
            <div className="star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt}  />
            </div>
          </div>
          <div className="cust">
            <FontAwesomeIcon icon={faQuoteRight} className='i' />
            <p>Mollitia accusantium assumenda veniam maiores beatae vitae cumque sint veritatis possimus placeat impedit commodi eveniet,veniam am voluptates at rem.</p>
            <img src={john} alt="john" />
            <p>John Deo</p>
            <div className="star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
          </div>
          <div className="cust cust-three">
            <FontAwesomeIcon icon={faQuoteRight} className='i' />
            <p>Veritatis fuga vitae labore qui dolor nihil quia, ad excepturi pariatur, consequuntur necessitatibus cum dolore eveniet? Tempore placeat, consequatur quia .</p>        
            <img src={john} alt="john" />
            <p>John Deo</p>
            <div className="star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Review;