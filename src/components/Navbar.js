import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import "../css/main.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <NavLink className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" to="/">Liberty Beans Coffee</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-lg-4">
                <NavLink exact to="/" className="nav-link text-uppercase text-expanded" 
                activeClassName="activeLink">Home</NavLink>
              </li>
              <li className="nav-item px-lg-4">
                <NavLink exact to="/about" className="nav-link text-uppercase text-expanded" activeClassName="activeLink">About</NavLink>
              </li>
              <li className="nav-item px-lg-4">
                <NavLink exact to="/products" className="nav-link text-uppercase text-expanded" activeClassName="activeLink">Products</NavLink>
              </li>
              <li className="nav-item px-lg-4">
                <NavLink exact to="/info" className="nav-link text-uppercase text-expanded" activeClassName="activeLink">Info</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
};

export default Navbar;