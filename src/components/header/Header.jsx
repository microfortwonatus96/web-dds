import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {

/*============================== Toggle Menu ============================== */
const [Toggle, showMenu] = useState(false)
  return (
    <header className="header animate__animated animate__fadeInDown">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <div className="logo__img"></div>
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list gird">
          <li className="nav__item">
              <a href="/" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>Work
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="/" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li> */}

            <li className="nav__item">
              <a href="/about" className="nav__link ">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a href="/contact_us" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact Us
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
