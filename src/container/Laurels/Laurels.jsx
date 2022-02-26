import React from "react";

import "./Laurels.scss";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding " id="laurels">
    <div className="app__wrapper_info">
      <SubHeading title={"Awards & recognation"} />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards?.map((award) => (
          <div className="app__laurels_awards-card" key={award.id}>
            <img src={award.imgUrl} alt="awards" />
            <div className="app__laurels_awards-card_content">
              <p className="p__cormorant" style={{ color: "#dcca87" }}>
                {" "}
                {award.title}{" "}
              </p>
              <p className="p__cormorant"> {award.subtitle} </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
