import React from "react";
import { Link } from "react-router-dom";
import { ClassicPrintsData } from "./ClassicPrintsData";
import "./ClassicPrints.css";
import { useDispatch } from "react-redux";
import { updateSelectedSize } from "./../../actions";

const ClassicPrints = () => {
  const dispatch = useDispatch();

  const handleDefaultSize = (el) => {
    console.log(el, "el");
    const newSize = [el.size, el.price, "Glossy"];
    dispatch(updateSelectedSize(newSize));
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
