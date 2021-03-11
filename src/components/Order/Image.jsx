import React, { Component } from "react";
import "./Image.css";

class Image extends Component {
  // state = {
  //   name: "some name",
  //   id: 123,
  //   size: "10x15",
  //   count: 1,
  // };

  render() {
    return (
      <>
        <div>
          <div className="img-container">
            <img src={this.props.image.imgSrc} alt="" />
          </div>
          <div className="img-details">
            <span className="img-count-decrease">
              <i class="fa fa-minus" aria-hidden="true"></i>
            </span>
            <span className="img-count">{this.props.image.count}</span>
            <span className="img-count-increase">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Image;
