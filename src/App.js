import React from "react";
import logo from "./assets/shared/logo.svg";
// import './App.css';

function App() {
  return (
    <div className="home">
      <header className="primary-header flex">
        <div>
          <img src={logo} alt="Space Tourism Logo" className="logo" />
        </div>
        <nav>
            <ul className="primary-navigation underline-indicators flex">
                <li className="active"><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#"><span>00</span>Home</a></li>
                <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#"><span>01</span>Destination</a></li>
                <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#"><span>02</span>Crew</a></li>
                <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#"><span>03</span>Technology</a></li>
            </ul>
        </nav>
      </header>

      <div className="grid-container">
        <div>
          <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
          <span class="fs-900 ff-serif text-white">Space</span></h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience! </p>
        </div>
        
        <div>
          <a href="#" className="large-button uppercase text-dark bg-white font-serif fs-600">Explore</a>
        </div>
      </div>
    </div>
  );
}

export default App;
