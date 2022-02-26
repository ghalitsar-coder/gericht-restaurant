import React from "react";

import "./SpecialMenu.scss";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title={"Menu that fits you palatte"} />
      <h1 className="headtext__cormorant">Today`s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {data?.wines?.map((wine, index) => (
            <MenuItem
              key={index + wine.title}
              price={wine.price}
              title={wine.title}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu_img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data?.cocktails?.map((cocktail, index) => (
            <MenuItem
              key={index + cocktail.title}
              price={cocktail.price}
              title={cocktail.title}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button className="custom__button" type="button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
