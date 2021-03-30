import {
  Dropdown,
  ProgressBar,
  Button,
  Form,
  DropdownButton,
} from "react-bootstrap";
import React, { Component } from "react";
import "./Order.css";
import Cropper from "./Cropper";
import Preview from "./Preview";
import Grid from "./Grid";
import { Link } from "react-router-dom";

class Order extends Component {
  fileObj = [];
  fileArray = [];
  state = {
    selectedSize: "10 x 15",
    uploading: false,
    images: [],
  };

  handleFileInput = (e) => {
    this.fileObj.unshift(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.unshift(URL.createObjectURL(this.fileObj[0][i]));
    }

    let uploads = [];

    this.fileArray.map((blob, i) => {
      return uploads.push({
        imgSrc: blob,
        id: i,
        count: 1,
        size: this.state.selectedSize,
      });
    });
    this.setState({ images: uploads });
    this.fileObj = [];
  };

  handleDelete = (id) => {
    const images = this.state.images.filter((img) => {
      return img.id !== id;
    });

    this.setState({ images });
  };

  handleIncreaseCount = (el) => {
    const images = [...this.state.images];
    const index = images.indexOf(el);
    images[index] = { ...el };
    images[index].count++;
    this.setState({ images });
  };

  handleDecreaseCount = (el) => {
    if (el.count > 1) {
      const images = [...this.state.images];
      const index = images.indexOf(el);
      images[index] = { ...el };
      images[index].count--;
      this.setState({ images });
    }
    console.log(el);
  };

  handleDropDownSelect = (e) => {
    console.log(e);
    const selectedSize = String(e);
    this.setState({ selectedSize });
  };

  render() {
    return (
      <main id="main">
        <header>
          <DropdownButton
            alignRight
            title={this.state.selectedSize}
            id="dropdown-menu-align-right"
            onSelect={this.handleDropDownSelect}>
            <Dropdown.Item href="#/10x15 ">10 x 15</Dropdown.Item>
            <Dropdown.Item href="#/13x18">13 x 18</Dropdown.Item>
            <Dropdown.Item href="#/A4">A4</Dropdown.Item>
          </DropdownButton>
          <div className="buttons">
            <Link to="/cart">
              <Button>Add To Cart</Button>
            </Link>
            <Button>Checkout</Button>
          </div>
        </header>
        {/* <ProgressBar variant="danger" animated now={3} /> */}
        {/* <Cropper images={this.state.images} /> */}
        <Preview />
        <input type="file" onChange={this.handleFileInput} multiple />
        <div className="main-quantity">
          Quantity: {this.state.images.length}
        </div>
        <Grid
          increaseCount={this.handleIncreaseCount}
          decreaseCount={this.handleDecreaseCount}
          onDelete={this.handleDelete}
          images={this.state.images}
        />
      </main>
    );
  }
}

export default Order;
