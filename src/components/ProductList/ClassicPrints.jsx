import React from "react";
import { Link } from "react-router-dom";
import { ClassicPrintsData } from "./ClassicPrintsData";
import "./ClassicPrints.css";

const ClassicPrints = (props) => {
  const handleDefaultSize = (el) => {
    props.handleDefaultSize(el);
  };

  return (
    <div id="standard">
      {ClassicPrintsData.map((el, i) => {
        return (
          <Link
            key={i}
            onClick={() => handleDefaultSize(el)}
            to={`order/${el.size}`}
            className={el.cName}>
            <div className="box-details">
              <div className="box-detail-item">
                <span>{el.size}</span>
                <span>{el.price} AMD</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ClassicPrints;
