import { Button } from "react-bootstrap";
import React, { Component } from "react";
import "./Grid.css";
import Image from "./Image";

class Grid extends Component {
  render() {
    return (
      <>
        <div className="grid-container">
          {this.props.images.map((image) => {
            return (
              <Image
                onDelete={this.props.onDelete}
                increaseCount={() => this.props.increaseCount(image)}
                decreaseCount={() => this.props.decreaseCount(image)}
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
