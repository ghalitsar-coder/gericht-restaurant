import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Newsletter, FooterOverlay } from "../../components";

import "./Footer.scss";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1232</p>
        <p className="p__opensans">+1 415-321-1111</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="gericht" />
        <p className="p__opensans">
          "The Best way to find yourself is to lose yourself in the service of
          others."
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday : </p>
        <p className="p__opensans">08:00 - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday : </p>
        <p className="p__opensans">07:00 - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. All Rights reserve</p>
    </div>
  </div>
);

export default Footer;
