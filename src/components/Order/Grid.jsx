import { Button } from "react-bootstrap";
import React, { Component } from "react";
import "./Grid.css";
import Image from "./Image";

class Grid extends Component {
  // fileObj = [];
  // fileArray = [];
  // state = {
  //   uploading: false,
  //   images: [],
  // };

  // handleFileInput = (e) => {
  //   this.fileObj.unshift(e.target.files);
  //   for (let i = 0; i < this.fileObj[0].length; i++) {
  //     this.fileArray.unshift(URL.createObjectURL(this.fileObj[0][i]));
  //   }

  //   this.setState({ images: this.fileArray });
  //   this.fileObj = [];
  // };

  render() {
    return (
      <>
        <div className="grid-container">
          {this.props.images.map((image) => {
            return (
              <Image
                onDelete={this.props.onDelete}
                increaseCount={this.props.increaseCount}
                decreaseCount={this.props.decreaseCount}
                key={image.id}
                id={image.id}
                image={image}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Grid;
