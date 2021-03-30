import React, { Component } from "react";
import "./Image.css";

class Image extends Component {
  state = {
    count: this.props.image.count,
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
      <>
        <div>
          <div className="img-container">
            <i
              onClick={() => this.props.onDelete(this.props.id)}
              className="fa fa-times-circle delete-icon"
              aria-hidden="true"></i>
            <img src={this.props.image.imgSrc} alt="" />
          </div>
          <div className="img-details">
            <span
              onClick={this.props.decreaseCount}
              className="img-count-decrease">
              <i className="fa fa-minus" aria-hidden="true"></i>
            </span>
            <span className="img-count">{this.props.image.count}</span>
            <span
              onClick={this.props.increaseCount}
              className="img-count-increase">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Image;
