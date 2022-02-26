import React from "react";

import "./AboutUs.scss";

import { images } from "../../constants";

const AboutUs = () => (
  <div className="app__aboutus app__bg  flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          maiores. Vero ea dolorem voluptatem in modi non iusto necessitatibus
          vel neque. Adipisci laboriosam asperiores ullam numquam aliquam? Et,
          assumenda modi commodi nostrum itaque facere esse!
        </p>
        <button className="custom__button" type="button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
          accusantium quibusdam ad magni cupiditate rem hic est, consectetur
          consequuntur dignissimos similique laborum laboriosam iusto ratione
          autem. In cum veritatis aliquam autem est.
        </p>
        <button className="custom__button" type="button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
