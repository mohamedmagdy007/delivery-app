import React from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import "../styles/header.css";
const Nav__links = [
  {
    display: "home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Content",
    path: "/content",
  },
];
const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Testy Treeat</h5>
          </div>
          <div className="navigation">
            <div className="menu  d-flex align-items-center gap-5">
              {Nav__links.map((items, index) => (
                <NavLink
                  key={index}
                  to={items.path}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {items.display}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="nav_right d-flex align-items-center gap-3">
            <span className="cart__icon">
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">2</span>
            </span>
            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>
            <span className="moblie__menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
