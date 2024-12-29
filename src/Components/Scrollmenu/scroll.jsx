import React, { useRef } from 'react';
import './scroll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import pizza from '../../images/pizza.jpg';
import burger from '../../images/burger.jpg';
import rajasthani from '../../images/rajasthani.jpg';
import cake from '../../images/cake.jpeg';
import sandwich from '../../images/sandwich.jpg';
import noodles from '../../images/noodles.jpeg';
import veg from '../../images/vegthali.jpg';
import sweets from '../../images/gulab-jamun.jpg';
import south from '../../images/south-indian-thali.jpg';
import rolls from '../../images/rolls.jpg';
import dosa from '../../images/Masala-Dosa.jpg';
import momos from '../../images/momos.jpg';
import ice from '../../images/ice-creame.jpg';
import panner from '../../images/Paneer-butter-masalaa.jpg';
import dal from '../../images/Dal-Makhani.jpg';
import breakfast from '../../images/breakfast.jpg';
import lunch from '../../images/lunch.jpg';
import tea from '../../images/tea.jpg';
import coffe from '../../images/coffee.jpg';
import tandoori from '../../images/tandoori.jpeg';
import vegetables from '../../images/mix-vegetable.jpg';


const Scroll = () => {
    const scrollRef = useRef(null);
    const scrollLeft = () => {
        if (scrollRef.current) scrollRef.current.scrollLeft -= 225;
    };
    const scrollRight = () => {
        if (scrollRef.current) scrollRef.current.scrollLeft += 225;
    };

    return (
        <div className="scroll-container">
            <FontAwesomeIcon icon={faArrowLeft} className='arrow-left' onClick={scrollLeft}/>
                <div className="scrollmenu scroll" id='menu' ref={scrollRef}>
                    <div className="srlmenu srlmenu-piz"><img src={pizza} alt='pizza'/><p>Pizza</p></div>
                    <div className="srlmenu"><img src={burger} alt='Burger'/><p>Burger</p></div>
                    <div className="srlmenu"><img src={rajasthani} alt='rajasthani'/><p>Rajasthani</p></div>
                    <div className="srlmenu"><img src={cake} alt='cake'/><p>Cake</p></div>
                    <div className="srlmenu"><img src={sandwich} alt='sandwich'/><p>Sandwich</p></div>
                    <div className="srlmenu"><img src={noodles} alt='Noodles'/><p>Noodles</p></div>
                    <div className="srlmenu"><img src={veg} alt='veg thali'/><p>Veg thali</p></div>
                    <div className="srlmenu"><img src={sweets} alt='sweets'/><p>Sweets</p></div>
                    <div className="srlmenu"><img src={south} alt='south indian'/><p>South Indian</p></div>
                    <div className="srlmenu"><img src={rolls} alt='rolls'/><p>Rolls</p></div>
                    <div className="srlmenu"><img src={dosa} alt='dosa'/><p>Dosa</p></div>
                    <div className="srlmenu"><img src={momos} alt='momos'/><p>Momos</p></div>
                    <div className="srlmenu"><img src={ice} alt='ice cream'/><p>Ice Cream</p></div>
                    <div className="srlmenu"><img src={panner} alt='paneer'/><p>Paneer</p></div>
                    <div className="srlmenu"><img src={dal} alt='dal'/><p>Dal</p></div>
                    <div className="srlmenu"><img src={breakfast} alt='breakfast'/><p>Breakfast</p></div>
                    <div className="srlmenu"><img src={lunch} alt='lunch'/><p>Lunch</p></div>
                    <div className="srlmenu"><img src={tea} alt='tea'/><p>Tea</p></div>
                    <div className="srlmenu"><img src={coffe} alt='coffee'/><p>Coffee</p></div>
                    <div className="srlmenu"><img src={tandoori} alt='tandoori'/><p>Tandoori</p></div>
                    <div className="srlmenu srlmenu-veg"><img src={vegetables} alt='vegetables'/><p>Vegetables</p></div>
                </div>
            <FontAwesomeIcon icon={faArrowRight} className='arrow-right' onClick={scrollRight}/>
        </div>        
    );
}

export default Scroll;
