import React, { Component } from "react";
import "./Products.css";
import "./@Shared.css";
import standardImgs from "../imgs/photos/@export";

class Products extends Component {
  render() {
    return (
      <>
        <section id="products">
          <header className="products-header">
            <h2 className="section-title">Explore features of Photo Prints</h2>
            <ul className="products-lists">
              <li className="products-list-item on-active">STANDARD PRINTS</li>
              <li className="products-list-item">SPECIAL PRINTS</li>
              <li className="products-list-item">COLLAGE</li>
              <li className="products-list-item">CALENDAR</li>
              <li className="products-list-item">STORE</li>
              <li className="products-list-item">SEE ALL</li>
            </ul>
          </header>
          <div className="products-container">
            <div id="standard">
              <div className="box1">
                <img
                  src={standardImgs[0]}
                  alt=""
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
            <div id="standard">
              <div className="box2">
                <img
                  src={standardImgs[0]}
                  alt=""
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
            <div id="standard">
              <div className="box1">
                <img
                  src={standardImgs[0]}
                  alt=""
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
            <div id="standard">
              <div className="box1">
                <img
                  src={standardImgs[0]}
                  alt=""
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
            <div id="standard">
              <div className="box1">
                <img
                  src={standardImgs[0]}
                  alt=""
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
            <div id="standard">
              <div className="box1">
                <img
                  src={standardImgs[0]}
                  alt=""
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
            <div id="standard">
              <div className="box1">
                <img
                  src={standardImgs[0]}
                  alt=""
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
            <div id="standard">
              <div className="box1">
                <img
                  src={standardImgs[0]}
                  alt=""
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
          </div>

          {/* <div id="special"></div>
          <div id="collage"></div>
          <div id="calendar"></div>
          <div id="store"></div>
          <div id="see-all"></div> */}
        </section>
      </>
    );
  }
}

export default Products;
