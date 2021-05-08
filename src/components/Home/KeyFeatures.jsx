import React from "react";
import "./KeyFeatures.css";
import "./@Shared.css";
import svg1 from "../../imgs/key-features/1.svg";
import svg2 from "../../imgs/key-features/2.svg";
import svg3 from "../../imgs/key-features/3.svg";

const KeyFeatures = () => {
  return (
    <section id="key-features">
      <h1 className="section-title">How to make your personalized order</h1>
      <div className="key-features-container">
        <div className="key-feature">
          <img src={svg1} alt="" />
          <h3>Choose your product</h3>
          <p>
            Classic prints for every occasion. Custom prints for special ones.
            Decorative frames for emphasizing special moments. Stickers for
            journal decorations & more.
          </p>
        </div>
        <div className="key-feature">
          <img src={svg2} alt="" />
          <h3>Personalise it!</h3>
          <p>
            Upload your photos easily to our website. Mobile uploads are also
            acceptable. Customize your orders with special tools. Make great
            gifts for your friends and family.
          </p>
        </div>
        <div className="key-feature">
          <img src={svg3} alt="" />
          <h3>Delivered to you direct</h3>
          <p>
            With an instant order and fast delivery save your time and enjoy
            your orders. Now available for Armenian provinces as well.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
