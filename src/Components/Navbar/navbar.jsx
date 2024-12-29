import React,{useRef, useState} from 'react';
import './navbar.css';
import navlogo from '../../images/navlogo.png';
import burger from '../../images/burger.jpg';
import momo from '../../images/momos.jpg';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faCaretRight, faCartShopping, faMagnifyingGlass, faMinus, faMultiply, faPlus, faSortDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const searchRef=useRef();
  const searchHandler = ()=>{
    searchRef.current.classList.toggle('active'); 
  }
  const cartRef=useRef();
  const CartHandler = ()=>{
    cartRef.current.classList.toggle('activate'); 
  }
  const [mobMenuOpen, setmobMenuOpen] = useState(false);
  const toggleMobMenu = ()=>{
    setmobMenuOpen(!mobMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
          <img src={navlogo} alt="logo" />
          <p>OMG Restaurents</p>
      </div>
      <ul className={`${mobMenuOpen ? 'open' : ''}`}>
        <li><Link to='home'>Home</Link></li>
        <li><Link to="menu">Menu</Link>
          <FontAwesomeIcon icon={faSortDown} className='i-down'/>
          <FontAwesomeIcon icon={faCaretRight} className='i-right'/>
          <div className="dropdown">
            <ul>
              <li><Link to='fast' >Fast Food</Link></li>
              <li><Link to='chinese' >Chinese Food</Link></li>
              <li><Link to='breakfast' >Breakfast</Link></li>
              <li><Link to='thalis' >Indian Thali's</Link></li>
              <li><Link to='vegetables' >Vegetables</Link></li>
              <li><Link to='desserts' >Desserts</Link></li>
            </ul>
          </div>
        </li>
        <li><Link to="review">Review</Link></li>
        <li><Link to="about">About Us</Link></li>
      </ul>
      <div className="icons">
        <FontAwesomeIcon icon={faBarsStaggered} className='i bars' onClick={toggleMobMenu}/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='i' onClick={searchHandler}/>
        <FontAwesomeIcon icon={faCartShopping} className='i' onClick={CartHandler}/>
      </div>
      <div className='search-form' ref={searchRef}>
        <input type="search" id="input-box" placeholder='Search here...' />
        <span><FontAwesomeIcon icon={faMagnifyingGlass} className='i'/></span>
      </div>
      <div className="cart-items" ref={cartRef}>
        <h2>Cart Items</h2>
          <div className="items">
            <div className="item">
              <img src={burger} alt="?" />
              <div className="item-info">
                <h5>Tandoori Veg Burger <span><FontAwesomeIcon icon={faMultiply} className='multi-icon' style={{cursor:'pointer'}}/></span></h5>
                <p>Spicy & Cruncy</p>
                <h5 className='price'>&#8377;50 
                  <div className="increase">
                    <FontAwesomeIcon icon={faMinus} className='i'/>
                    <h4>&nbsp;01&nbsp;</h4>
                    <FontAwesomeIcon icon={faPlus} className='i plus'/>
                  </div>
                </h5>
              </div>
            </div>
            <div className="item">
            <img src={momo} alt="?" />
              <div className="item-info">
                <h5>Veg Steamed Momos <span><FontAwesomeIcon icon={faMultiply} className='multi-icon' style={{cursor:'pointer'}}/></span></h5>
                <p>Delicious Chutney</p>
                <h5 className='price'>&#8377;60
                  <div className="increase">
                    <FontAwesomeIcon icon={faMinus} className='i'/>
                    <h4>&nbsp;01&nbsp;</h4>
                    <FontAwesomeIcon icon={faPlus} className='i plus'/>
                  </div>
                </h5>
              </div>
            </div>
          </div>
          <div className="cart-summary">
            <div className="coupon">
              <input type="text" placeholder='Coupon Code' id='text'/>
              <input type="button" value="Apply" id='btn'/>
            </div>
            <div className='total'>
              <p>Subtotal</p><p>&#8377;110rs.</p>
            </div>
            <div className='total'>
              <p>Delivery Charge</p><p>&#8377;15rs.</p>
            </div>
            <div className='total'>
              <p>Total <span>(2 items)</span></p><p>&#8377;125rs.</p>
            </div>
          </div>
        <button>Place Order</button>
      </div>
    </nav>
  )
}

export default Navbar;