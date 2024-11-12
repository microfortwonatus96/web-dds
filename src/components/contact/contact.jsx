import React from "react";
import "./contact.css";


const Contact = () => {
 return(
  <>
  <div className="footer">
    <div className="contact__container" id="contact">
      <div className="footer-content">
        <h3>Contact</h3>
        <p>Email: kddafdd@gmail.com</p>
        <p>Phone: 0877656745476</p>
      </div>
      <div className="footer-content">
        <h3>Adress</h3>
        <h4>Yoyakarta</h4>
        <p>Jl. Babarsari Jl. Raya Janti No.15, Janti, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</p>

        <h4>Magelang</h4>
        <p>Jl. Jendral Sudirman No.68, Magersari, Kec. Magelang Selatan, Kota Magelang, Jawa Tengah, 59214</p>
      </div>
      <div className="footer-content">
        <h3>Follow Us</h3>
        <ul className="sosial-icons">
          <li><a href=""><i className="fab fa-facebook"></i> csascsac</a></li>
          <li><a href=""><i className="fab fa-instagram"></i> dvdvdvdv</a></li>
          <li><a href=""><i className="fab fa-linkedin"></i> advddvdav</a></li>
          <li><a href=""><i className="fab fa-tiktok"></i></a> dvdsvsdvds</li>
        </ul>
      </div>
    </div>
    <div className="bottom-bar">
      <p>&copy; 2024 David Digital Solution. All Rights Reserved</p>
    </div>
  </div>
  </>
 )
}

export default Contact;