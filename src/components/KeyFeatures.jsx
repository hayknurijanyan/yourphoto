import React from "react";
import "./KeyFeatures.css";
import "./@Shared.css";
import svg1 from "./../imgs/key-features/1.svg";
import svg2 from "./../imgs/key-features/2.svg";
import svg3 from "./../imgs/key-features/3.svg";

const KeyFeatures = () => {
  return (
    <section id="key-features">
      <h1 className="section-title">How to make your personalized order</h1>
      <div className="key-features-container">
        <div className="key-feature">
          <img src={svg1} alt="" />
          <h3>Choose your product</h3>
          <p>
            Photo Books for grandparents. Dedicated mugs for everyone in the
            family. Canvas Prints to show off your holidays. Take your pick.
          </p>
        </div>
        <div className="key-feature">
          <img src={svg2} alt="" />
          <h3>Personalise it!</h3>
          <p>
            Upload photos from your phone - most smartphones take such great
            quality shots - and customise your gift with colours, text, filters.
          </p>
        </div>
        <div className="key-feature">
          <img src={svg3} alt="" />
          <h3>Delivered to you direct</h3>
          <p>
            With a choice of delivery options available, your gift can be with
            you in no time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
