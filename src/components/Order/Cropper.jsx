import React, { Component } from "react";
import "./Cropper.css";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

class Cropper extends Component {
  state = {
    crop: {
      aspect: 15 / 10,
      unit: "px", // default, can be 'px' or '%'
      x: 130,
      y: 50,
      width: 200,
      height: 200,
    },
  };

  handleOnCrop = (crop) => {
    this.setState({ crop: crop });
  };

  handleImageLoaded = (image) => {
    console.log(image);
  };

  handleOnComplete = (crop, pixelCrop) => {
    console.log(crop, pixelCrop);
  };

  render() {
    return (
      <>
        <div className="cropper">
          <ReactCrop
            onComplete={this.handleOnComplete}
            onImageLoaded={this.handleImageLoaded}
            onChange={this.handleOnCrop}
            src="https://i.insider.com/5d321d4ea209d3146d650b4a?width=700"
            crop={this.state.crop}></ReactCrop>
        </div>
      </>
    );
  }
}

export default Cropper;
