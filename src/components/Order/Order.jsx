import { Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import "./Order.css";
import Cropper from "./Cropper";
import Preview from "./Preview";
import Grid from "./Grid";

class Order extends Component {
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

    let uploads = [];

    this.fileArray.map((blob) => {
      return uploads.push({ imgSrc: blob, id: 1, count: 1, size: "10x15" });
    });
    this.setState({ images: uploads });
    this.fileObj = [];
  };

  // handleIncrease = () => {
  //   let n = ++this.state.count;
  //   this.setState({ count: n });
  // };

  // handleDecrease = () => {
  //   if (this.state.count > 1) {
  //     let n = --this.state.count;
  //     this.setState({ count: n });
  //   }
  // };
  render() {
    return (
      <main id="main">
        <header>
          {/* <Button className="upload-buuton" variant="danger">
            Upload Photo
          </Button>{" "} */}
          <input type="file" onChange={this.handleFileInput} multiple />
          <div className="main-quantity">
            Quantity: {this.state.images.length}
          </div>
        </header>
        <Cropper />
        <Preview />
        <Grid images={this.state.images} />
      </main>
    );
  }
}

export default Order;
