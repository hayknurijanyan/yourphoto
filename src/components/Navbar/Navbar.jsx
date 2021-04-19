import { Badge } from "react-bootstrap";
import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import logo from "../../imgs/logo/logo.png";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [clicked, setClicked] = useState(false);

  function handleClickMenu() {
    setClicked(!clicked);
  }

  return (
    <nav className="NavbarItems">
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className="navbar-logo">
        <img className="navbar-logo-img" src={logo} alt="" />
        <h1 className="navbar-logo-text">YourPhoto</h1>
      </Link>
      <ul className={clicked ? "navbar-menu open" : "navbar-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <ScrollLink
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-30}
                duration={50}
                className={clicked ? item.cName : "mobile-nav-links"}
                to={item.url}>
                {item.title}
              </ScrollLink>
            </li>
          );
        })}
      </ul>
      <div className="navbar-icons">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <i className="fa fa-home" aria-hidden="true"></i>
        </Link>

        <Link to="/cart">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          {cart.length != "0" && (
            <Badge
              pill
              variant="danger"
              style={{
                position: "absolute",
                textAlign: "center",
                right: "91px",
                top: "11px",
              }}>
              {cart.length}
            </Badge>
          )}
        </Link>

        <Link to="/profile">
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        </Link>
      </div>
      <i
        onClick={handleClickMenu}
        className="fa fa-bars bars"
        aria-hidden="true"></i>
    </nav>
  );
};

export default Navbar;
