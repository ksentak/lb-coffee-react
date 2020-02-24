import React, { Component } from "react";
import "../css/main.css";


// Need to convert href links to react router dom links

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div class="container">
          <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="index.html">Liberty Beans Coffee</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item px-lg-4">
                <a class="nav-link text-uppercase text-expanded" href="index.html">Home
              <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item active px-lg-4">
                <a class="nav-link text-uppercase text-expanded" href="about.html">About</a>
              </li>
              <li class="nav-item px-lg-4">
                <a class="nav-link text-uppercase text-expanded" href="products.html">Products</a>
              </li>
              <li class="nav-item px-lg-4">
                <a class="nav-link text-uppercase text-expanded" href="info.html">Hours & Location</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
};

export default Navbar;