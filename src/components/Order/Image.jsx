import React, { Component } from "react";
import "./Image.css";

class Image extends Component {
  state = {
    name: "some name",
    id: 123,
    size: "10x15",
    count: 1,
  };

  handleIncrease = () => {
    let n = ++this.state.count;
    this.setState({ count: n });
  };

  handleDecrease = () => {
    if (this.state.count > 1) {
      let n = --this.state.count;
      this.setState({ count: n });
    }
  };

  render() {
    return (
      <>
        <div>
          <div className="img-container">
            <img src={this.props.src} alt="" />
          </div>
          <div className="img-details">
            <span onClick={this.handleDecrease} className="img-count-decrease">
              <i class="fa fa-minus" aria-hidden="true"></i>
            </span>
            <span className="img-count">{this.state.count}</span>
            <span onClick={this.handleIncrease} className="img-count-increase">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Image;
