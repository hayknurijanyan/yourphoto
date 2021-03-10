import React, { Component } from "react";
import "./Image.css";

class Image extends Component {
  state = {
    imgSrc:
      "https://mymodernmet.com/wp/wp-content/uploads/2019/12/photos-of-indonesia-rarindra-prakarsa-17.jpg",
    name: "some name",
    id: 123,
    size: "10x15",
    count: 0,
  };
  render() {
    return (
      <>
        <div className="imgs-grid">
          <div className="img-container">
            <img src={this.state.imgSrc} alt="" />
            <div className="img-quantity"></div>
            <div className="img-size"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Image;
