import React from "react";

import "./Newsletter.scss";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title={"Newsletter"} />
      <h1 className="headtext__cormorant">Subscribe To Our NewsLetter</h1>
      <p className="p__opensans">And never Miss Latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your E-mail Address"
      />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
