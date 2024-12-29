import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Scroll from './Components/Scrollmenu/scroll';
import Menu from './Components/Menu/menu';
import Review from './Components/Review/review';
import About from './Components/About/about';
import Footer from './Components/Footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="Main-container">
          <Navbar/>
          <div className="Main-Content">
            <Home/>
            <Scroll/>
            <Menu/>
            <Review/>
            <About/>
          </div>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
