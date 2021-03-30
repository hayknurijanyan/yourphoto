import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../imgs/slides/1.jpg";
import img2 from "../../imgs/slides/2.jpg";
import img3 from "../../imgs/slides/3.jpg";

class Slider extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <div
            className="d-block w-100"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "680px",
            }}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-block w-100"
            style={{
              backgroundImage: `url(${img2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "680px",
            }}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-block w-100"
            style={{
              backgroundImage: `url(${img3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "680px",
            }}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;
