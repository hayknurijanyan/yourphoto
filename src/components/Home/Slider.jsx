import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../imgs/slides/1.jpg";
import img2 from "../../imgs/slides/2.jpg";
import img3 from "../../imgs/slides/3.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className="d-block w-100 slide"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          alt="Second slide"
        />

        <Carousel.Caption
          style={{
            backgroundColor: "rgb(255,245,238,0.5)",
            color: "#262935",
            borderRadius: "16px",
            height: "180px",
          }}>
          <h3 className="carousel-h3">Capture The Moment</h3>
          <p className="carousel-p">
            Share the best moments with your family and friends.
          </p>
          <Link to="/order">
            <Button variant="danger">Order Now</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100 slide"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          alt="Second slide"
        />

        <Carousel.Caption
          style={{
            backgroundColor: "rgb(255,245,238,0.3)",
            color: "#262935",

            borderRadius: "16px",
            height: "180px",
          }}>
          <h3 className="carousel-h3">Print Directly From Your Phone</h3>
          <p className="carousel-p">
            YourPhoto app is available on the App Store and Google Play Store.
          </p>
          <Link to="/order">
            <Button variant="danger">Order Now</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100 slide"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          alt="Second slide"
        />

        <Carousel.Caption
          style={{
            backgroundColor: "rgb(255,245,238,0.3)",
            color: "#262935",
            borderRadius: "16px",
            height: "180px",
          }}>
          <h3 className="carousel-h3">Create Your Own Story</h3>
          <p className="carousel-p">
            Create custom prints to make a unique photo collage for your wall.
          </p>
          <Link to="/order">
            <Button variant="danger">Order Now</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
