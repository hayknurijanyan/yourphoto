import React from "react";
import { Link } from "react-router-dom";
import "./Standard.css";
// import standardImgs from "../imgs/photos/@export";

const Standard = () => {
  return (
    <div id="standard">
      <Link to="order/3.5x4.5" className="box1">
        <div className="box-details">
          <div className="box-detail-item">
            <span>3.5 x 4.5</span>
            <span>100 AMD</span>
          </div>
        </div>
      </Link>

      <Link to="order/10x10" className="box2">
        <div className="box-details">
          <div className="box-detail-item">
            <span>10 x 10</span>
            <span>80 AMD</span>
          </div>
        </div>
      </Link>

      <Link to="order/10x15" className="box3">
        <div className="box-details">
          <div className="box-detail-item">
            <span>10 x 15</span>
            <span>60 AMD</span>
          </div>
        </div>
      </Link>

      <Link to="order/13x18" className="box4">
        <div className="box-details">
          <div className="box-detail-item">
            <span>13 x 18</span>
            <span>120 AMD</span>
          </div>
        </div>
      </Link>

      <Link to="order/A5" className="box5">
        <div className="box-details">
          <div className="box-detail-item">
            <span>A5</span>
            <span>250 AMD</span>
          </div>
        </div>
      </Link>

      <Link to="order/21x28" className="box6">
        <div className="box-details">
          <div className="box-detail-item">
            <span>21 x 28</span>
            <span>400 AMD</span>
          </div>
        </div>
      </Link>

      <Link to="order/A4" className="box7">
        <div className="box-details">
          <div className="box-detail-item">
            <span>A4</span>
            <span>500 AMD</span>
          </div>
        </div>
      </Link>

      <Link to="order/A3" className="box8">
        <div className="box-details">
          <div className="box-detail-item">
            <span>A3</span>
            <span>2500 AMD</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Standard;
