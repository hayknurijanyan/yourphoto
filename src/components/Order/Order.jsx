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
    count: 1,
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
    return (
      <main id="main">
        <header>
          <Button className="upload-buuton" variant="danger">
            Upload Photo
          </Button>{" "}
          <div className="main-quantity">Quantity: {this.state.quantity}</div>
        </header>
        <Cropper />
        <Preview />
        <Grid />
      </main>
    );
  }
}

export default Order;
