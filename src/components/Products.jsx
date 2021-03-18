import React, { Component } from "react";
import "./Products.css";
import "./@Shared.css";
import Standard from "./Product-List/Standard";

class Products extends Component {
  state = {
    productList: [
      {
        title: "STANDARD PRINTS",
        active: true,
      },
      {
        title: "SPECIAL PRINTS",
        active: false,
      },
      {
        title: "COLLAGE",
        active: false,
      },
      {
        title: "SEE ALL >",
        active: false,
      },
    ],
  };

  handleClick = (item) => {
    this.state.productList.forEach((el) => {
      return (el.active = false);
    });
    item.active = item.active === false ? true : true;
    // console.log(this.state.productList);
    this.setState({ productList: this.state.productList });
  };

  checkActiveStatus(item) {
    return item.active === true
      ? "products-list-item on-active"
      : "products-list-item";
  }

  render() {
    return (
      <>
        <section id="products">
          <h2 className="section-title">Explore features of Photo Prints</h2>
          <header className="products-header">
            <ul className="products-lists">
              {this.state.productList.map((item, index) => {
                return (
                  <li
                    onClick={() => this.handleClick(item)}
                    key={index}
                    className={this.checkActiveStatus(item)}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </header>
          <div className="products-container">
            <Standard />
          </div>
        </section>
      </>
    );
  }
}

export default Products;
