import React from "react";
import '../home/HomePage.css';
import homePageImg from '../../images/home.png';

function HomePage() {
    return (
      <div className="home-container">
        <div className="home-info">
          <div className="home-left">
            <h1>Single Page App</h1>
            <h2>ReactJS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="home-right">
            <img className="home-bg" src={homePageImg} alt="home img" />
          </div>
        </div>
      </div>
    );
}

export default HomePage;