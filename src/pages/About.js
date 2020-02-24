import React, { Component } from "react";
import "../css/main.css";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CoffeeShop from "../images/coffee-shop.jpg";

class About extends Component {
  render() {
    return (
      <div className="About">
        <Header />
        <Navbar />

        <section className="page-section about-heading">
          <div className="container">
            <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={CoffeeShop} alt="Coffee Shop" />
            <div className="about-heading-content">
              <div className="row">
                <div className="col-xl-9 col-lg-10 mx-auto">
                  <div className="bg-faded rounded p-5">
                    <h2 className="section-heading mb-4">
                      <span className="section-heading-upper">Liberty Beans Coffee</span>
                      <span className="section-heading-lower">About Us</span>
                    </h2>
                    <p>Founded in 2003 by brothers John and Jimmy Smith, our shop has been serving up the most        delicious coffee in the city of Philadelphia. We pride ourselves on using the best ingrediants and taking care of our loyal customers.
                    </p>
                    <p className="mb-0">We guarantee that you will fall in <em>love</em> with our small coffee shop atmosphere. Whether you are coming in as part of your daily routine, for a relaxing place to think, or meeting up with friends, Liberty Beans Coffee is the place to be.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  };
};

export default About;