import { Button } from "react-bootstrap";
import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import logo from "../../imgs/logo/logo.png";
import { Link } from "react-router-dom";

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
        <Link to="/" className="navbar-logo">
          <img className="navbar-logo-img" src={logo} alt="" />
          <h1 className="navbar-logo-text">YourPhoto</h1>
        </Link>
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
        <div className="navbar-icons">
          <Link to="cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </Link>
          <Link to="signin">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
          </Link>
        </div>
        <i
          onClick={this.handleClick}
          className="fa fa-bars bars"
          aria-hidden="true"></i>
      </nav>
    );
  }
}

export default Navbar;
