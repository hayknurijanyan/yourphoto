import React from "react";
import { Link } from "react-router-dom";
import { ClassicPrintsData } from "./ClassicPrintsData";
import "./ClassicPrints.css";
import { useDispatch } from "react-redux";
import { updateSelectedSize } from "./../../actions";

const ClassicPrints = () => {
  const dispatch = useDispatch();

  const handleDefaultSize = (el) => {
    const newSize = [el.size, el.price, "Glossy"];
    dispatch(updateSelectedSize(newSize));
  };

  return (
    <>
      <div
        id="classic-prints"
        // style={{
        //   display: "grid",
        //   justifyContent: "center",
        //   gridGap: "20px",
        //   gridTemplateColumns: "repeat(4, minmax(230px, auto))",
        //   gridTemplateRows: "repeat(2, minmax(230px, auto))",
        //   marginBottom: "50px",
        // }}
      >
        {ClassicPrintsData.map((el, i) => {
          return (
            <Link
              key={i}
              onClick={() => handleDefaultSize(el)}
              to={`order/${el.size}`}
              className={el.cName}>
              <div
                className="box-details"
                // style={{
                //   display: "flex",
                //   flexDirection: "column",
                //   justifyContent: "flex-end",
                //   width: "100%",
                //   height: "100%",
                // }}
              >
                <div className="box-detail-item">
                  <span>{el.size}</span>
                  <span>{el.price} AMD</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ClassicPrints;
