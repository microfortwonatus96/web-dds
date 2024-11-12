import React from "react";
import "./home.css";
import Data from "./Data";
import Scroll from "./Scroll";
import homeLogoRight from "../../assets/home/undraw_mobile_content_xvgr.svg";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div
            className="home__img"
            
          >
            <img src={homeLogoRight} alt="" />
          </div>
          <Data />
        </div>

        <Scroll />
      </div>
    </section>
  );
};

export default Home;
