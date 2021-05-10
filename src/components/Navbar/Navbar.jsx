import { Badge } from "react-bootstrap";
import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import logo from "../../imgs/logo/logo.png";
import { Link } from "react-router-dom";
// import * as Scroll from "react-scroll";
// import { Link as ScrollLink } from "react-scroll";
import { useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const { currentUser } = useAuth();
  const [clicked, setClicked] = useState(false);
  const profileColor = currentUser
    ? "fa fa-user-circle"
    : "fa fa-user-circle color";

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
            <li key={index} onClick={() => setClicked(false)}>
              <a
                activeclass="active"
                spy="true"
                smooth="true"
                offset={-30}
                duration={50}
                className={clicked ? item.cName : "mobile-nav-links"}
                href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
        <Link className="text-link" to="/order">
          <li
            onClick={() => setClicked(false)}
            className={clicked ? "nav-cta" : "nav-cta-none"}>
            Order Now
          </li>
        </Link>
      </ul>
      <div className="navbar-icons">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <i className="fa fa-home" aria-hidden="true"></i>
        </Link>

        <Link to="/cart">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          {cart.length !== 0 && (
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
        {/* {currentUser && (
          <Link to="/profile">
            <div className="signed-profile">
              <span>{String(currentUser.displayName).charAt(0)}</span>
            </div>
          </Link>
        )} */}

        <Link to="/profile">
          <i className={profileColor} aria-hidden="true"></i>
        </Link>
      </div>
      {clicked && (
        <i
          onClick={handleClickMenu}
          className="fa fa-times"
          aria-hidden="true"></i>
      )}
      {!clicked && (
        <i
          onClick={handleClickMenu}
          className="fa fa-bars bars"
          aria-hidden="true"></i>
      )}
    </nav>
  );
};

export default Navbar;
