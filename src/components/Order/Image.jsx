import React from "react";
import "./Image.css";

const Image = (props) => {
  return (
    <>
      <div>
        <div className="img-container">
          <i
            onClick={() => props.onDelete(props.id)}
            className="fa fa-times-circle delete-icon"
            aria-hidden="true"></i>
          <img src={props.image.imgSrc} alt="" />
        </div>
        <div className="img-details">
          <span onClick={props.decreaseCount} className="img-count-decrease">
            <i className="fa fa-minus" aria-hidden="true"></i>
          </span>
          <span className="img-count">{props.image.count}</span>
          <span onClick={props.increaseCount} className="img-count-increase">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default Image;
