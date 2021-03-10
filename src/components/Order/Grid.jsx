import React, { Component } from "react";
import "./Grid.css";
import Image from "./Image";

class Grid extends Component {
  fileObj = [];
  fileArray = [];
  state = {
    uploading: false,
    images: [],
  };
  handleFileInput = (e) => {
    this.fileObj.unshift(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.unshift(URL.createObjectURL(this.fileObj[0][i]));
    }

    this.setState({ images: this.fileArray });
    this.fileObj = [];
  };
  render() {
    console.log(this.state.images, "img-grid");

    return (
      <>
        <div className="grid-container">
          <input
            type="file"
            onChange={this.handleFileInput}
            // style={{ display: "none" }}
            multiple
          />
          {this.state.images.map((imgSrc) => {
            return <img src={imgSrc} alt="" />;
          })}
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
      </>
    );
  }
}

export default Grid;
