import React from "react";
import "./about.css";
import AboutImg from "../../assets/logo/Vertikal_1.svg";
// import CV from "../../assets/CV-Micro_Fortwonatus.pdf";
import Info from "./Info";
import Why from '../why/Why';
import How from '../how/how';
import Scroll from "./Scroll";
import Home from "../home/Home";

const About = () => {
  return (
    <>
    <section className="about container grid" id="about">
      <h2 className="section__title">About</h2>
      <span className="section__subtitle"></span>
      <div className="about__container container grid">
      
      <div className="" >
        <img src={AboutImg} alt="" className="about__img" />
      </div>
      <div className="about__data">

      <div>
        <p className="about_visi">
          David Digital Solution adalah agensi media sosial
          multi-platform yang didedikasikan untuk membantu
          UMKM bersaing di era digital.

          Kami percaya bahwa UMKM memiliki potensi untuk
          bersaing dan berkembang di tengah dominasi
          perusahaan besar.

          Kami berkomitmen untuk membantu UMKM
          meningkatkan eksposur mereka di dunia digital dengan
          strategiyang tepat.
          </p>
      </div>
      </div>
        
      </div>
      <Scroll />
      <Why />
      <How />
    </section>

    
    </>
  );
};

export default About;
