import { Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import "./Order.css";
import Cropper from "./Cropper";
import Preview from "./Preview";
import Grid from "./Grid";

class Order extends Component {
  render() {
    return (
      <main id="main">
        <header>
          <Button className="upload-buuton" variant="danger">
            Upload Photo
          </Button>{" "}
          <div className="main-quantity">Quantity: "to be raised"</div>
        </header>
        <Cropper />
        <Preview />
        <Grid />
      </main>
    );
  }
}

export default Order;
