import React from 'react';
import './home.css';
import { Link } from 'react-scroll';

const Home = () => {
  return (
        <section className='home section' id="home">
            <div className="home-info">
                <h1>Welcome to OMG Hotel & Restaurants</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptatibus. provident libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus! Lorem, ipsum.</p>
                <Link to="menu"><button class="orderbtn">Order Now</button></Link>
            </div>
        </section>
  )
}
export default Home;