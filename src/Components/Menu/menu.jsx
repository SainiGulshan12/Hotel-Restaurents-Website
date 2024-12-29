import React, { useRef } from 'react';
import './menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faLock } from '@fortawesome/free-solid-svg-icons';

import burger from '../../images/burger.jpg';
import pizza from '../../images/pizza.jpg';
import pav from '../../images/Pav-bhaji.jpg';
import chole from '../../images/Chole-bhature.jpg';
import chowmein from '../../images/chow-mein.jpg';
import dosa from '../../images/Masala-Dosa.jpg';
import momo from '../../images/momos.jpg';
import rolls from '../../images/rolls.jpg';
import noodles from '../../images/Chinese-Lo-Mein.jpg';
import manchow from '../../images/manchow-soup-veg.jpg';
import tea from '../../images/tea.jpg';
import coffee from '../../images/coffee.jpg';
import cold from '../../images/cold-coffee.jpg';
import sandwich from '../../images/sandwich.jpg';
import idli from '../../images/idli.jpg';
import paratha from '../../images/Aloo-Paratha.jpg';
import rajasthan from '../../images/rajasthani.jpg';
import south from '../../images/south-indian-thali.jpg';
import vegthali from '../../images/vegthali.jpg';
import special from '../../images/Special-Thali.jpg';
import matar from '../../images/matar-paneer.jpg';
import mix from '../../images/mix-vegetable.jpg';
import makhni from '../../images/Dal-Makhani.jpg';
import lababdar from '../../images/paneer-lababdar.jpg';
import deserts from '../../images/deserts.jpg';
import sweets from '../../images/gulab-jamun.jpg';
import ice from '../../images/icecreame.jpg';

const Menu = () => {
    const scrollRefs = {
        fast: useRef(null),
        chinese: useRef(null),
        breakfast: useRef(null),
        thali: useRef(null),
        vegetables: useRef(null),
        desserts: useRef(null),
    };

    const scrollLeft = (category) => {
        if (scrollRefs[category]?.current) {
            scrollRefs[category].current.scrollLeft -= 350;
        }
    };

    const scrollRight = (category) => {
        if (scrollRefs[category]?.current) {
            scrollRefs[category].current.scrollLeft += 370;
        }
    };

    return (
        <div>
            <Section
                title="Fast Food"
                subtitle="Local Fast Food Corner"
                items={[
                    { img: burger, name: "Tandoori Veg Burger", price: 50 },
                    { img: pizza, name: "Mix Veg Pizza", price: 150 },
                    { img: pav, name: "Pav Bhaji", price: 70 },
                    { img: chole, name: "Chole Bhature", price: 60 },
                    { img: chowmein, name: "Veg Chowmein", price: 60 },
                    { img: dosa, name: "Masala Dosa", price: 80 },
                ]}
                scrollRef={scrollRefs.fast}
                scrollLeft={() => scrollLeft("fast")}
                scrollRight={() => scrollRight("fast")}
                showArrows={true}
                className="fast"
                id="fast"
            />
            <Section
                title="Chinese Food"
                subtitle="Authentic Chinese Cuisine"
                items={[
                    { img: momo, name: "Veg Steamed Momos", price: 60 },
                    { img: rolls, name: "Spring Rolls", price: 80 },
                    { img: noodles, name: "Noodles", price: 50 },
                    { img: manchow, name: "Manchow Soup", price: 90 },
                ]}
                scrollRef={scrollRefs.chinese}
                scrollLeft={() => scrollLeft("chinese")}
                scrollRight={() => scrollRight("chinese")}
                showArrows={true}
                className="chin"
                id="chinese"
            />
            <Section id="breakfast"
                title="Breakfast"
                subtitle="Start Your Day Right"
                items={[
                    { img: tea, name: "Kullad Chai", price: 25 },
                    { img: sandwich, name: "Sandwich", price: 70 },
                    { img: coffee, name: "Hot Coffee", price: 40 },
                    { img: cold, name: "Cold Coffee", price: 60 },
                    { img: idli, name: "Idli", price: 60 },
                    { img: paratha, name: "Aloo Paratha", price: 70 },
                ]}
                scrollRef={scrollRefs.breakfast}
                scrollLeft={() => scrollLeft("breakfast")}
                scrollRight={() => scrollRight("breakfast")}
                showArrows={true}
                className="break"
            />
            <Section
                title="Thali's"
                subtitle="Delicious Indian Thalis"
                items={[
                    { img: rajasthan, name: "Rajasthani Thali", price: 260 },
                    { img: south, name: "South Indian Thali", price: 240 },
                    { img: vegthali, name: "Veg Simple Thali", price: 290 },
                    { img: special, name: "Veg Special Thali", price: 350 },
                ]}
                scrollRef={scrollRefs.thali}
                scrollLeft={() => scrollLeft("thali")}
                scrollRight={() => scrollRight("thali")}  
                showArrows={true}
                className="thal"
                id="thalis"
            />
            <Section
                title="Vegetables"
                subtitle="Healthy & Fresh Vegetables"
                items={[
                    { img: matar, name: "Matar Paneer", price: 230 },
                    { img: mix, name: "Mix Vegetable", price: 220 },
                    { img: makhni, name: "Dal Makhani", price: 180 },
                    { img: lababdar, name: "Paneer Lababdar", price: 260 },
                ]}
                scrollRef={scrollRefs.vegetables}
                scrollLeft={() => scrollLeft("vegetables")}
                scrollRight={() => scrollRight("vegetables")}
                showArrows={true}
                className="veg"
                id="vegetables"
            />
            <Section
                title="Desserts"
                subtitle="Sweet Dishes"
                items={[
                    { img: deserts, name: "Strawberry Dessert", price: 130 },
                    { img: sweets, name: "Gulab Jamun", price: 80 },
                    { img: ice, name: "Ice Creams", price: 'MRP' },
                ]}
                scrollRef={scrollRefs.desserts}
                scrollLeft={() => scrollLeft('desserts')}
                scrollRight={() => scrollRight('desserts')}
                showArrows={true}
                className="dess"
                id="desserts"
            />
        </div>
    );
};

const Section = ({ title, subtitle, items, scrollRef, scrollLeft, scrollRight, showArrows, className,id }) => (
    <div className={"main-menu " + (className || "")} id={(id || "")}>
        <div className="Menu-heading">
            <h2 className="h2">{title}</h2>
            <h5 className="h5">{subtitle}</h5>
            <h4>See all</h4>
        </div>
        <div className="main-contain" ref={scrollRef}>
            {items.map((item, index) => (
                <div className='menu' key={index}>
                    <img src={item.img} alt={item.name} />
                    <div className="food">
                        <div className="food-dish">
                            <h5>{item.name}</h5>
                            <h5 className="price">&#8377;{item.price}</h5>
                        </div>
                        <button><FontAwesomeIcon className='i-lock' icon={faLock} style={{marginRight:'.5rem'}}/>Add to Cart</button>
                    </div>
                </div>
            ))}
            {showArrows && (
                <div className="arrow">
                    <FontAwesomeIcon icon={faArrowLeft} className="i" onClick={scrollLeft} />
                    <FontAwesomeIcon icon={faArrowRight} className="i" onClick={scrollRight} />
                </div>
            )}
        </div>
    </div>
);

export default Menu;
