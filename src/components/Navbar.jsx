import { Button } from "react-bootstrap";
import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import logo from "../imgs/logo/logo.png";

class Navbar extends Component {
  state = {
    clicked: true,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <img className="navbar-logo-img" src={logo} alt="" />
          <h1 className="navbar-logo-text">YourPhoto</h1>
        </div>
        <ul className={this.state.clicked ? "navbar-menu open" : "navbar-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={
                    this.state.clicked ? item.cName : "mobile-nav-links"
                  }
                  href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button className="cta" variant="outline-danger">
          Order Now
        </Button>{" "}
        <i
          onClick={this.handleClick}
          className="fa fa-bars bars"
          aria-hidden="true"></i>
      </nav>
    );
  }
}

export default Navbar;
