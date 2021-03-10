import { Button } from "react-bootstrap";
import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import logo from "../imgs/logo/logo.png";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <img className="navbar-logo" src={logo} alt="" />
        <h1 className="navbar-logo-text">YourPhoto</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <ul
          className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button className="cta" variant="outline-danger">
          Order Now
        </Button>{" "}
      </nav>
    );
  }
}

export default Navbar;
