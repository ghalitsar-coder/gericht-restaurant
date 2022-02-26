import React from "react";

import "./Header.scss";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chose The New Flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum
        iusto voluptates esse, vel alias minus sunt magni, minima mollitia
        eligendi nihil nulla beatae voluptatibus eos incidunt nesciunt modi
        maiores.{" "}
      </p>
      <button className="custom__button" type="button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
