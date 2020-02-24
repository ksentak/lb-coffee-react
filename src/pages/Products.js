import React, { Component } from "react";
import "../css/main.css";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import Product1 from "../images/product1.jpg";
import Product2 from "../images/product2.jpg";
import Product3 from "../images/product3.jpg";

class Products extends Component {
  render() {
    return (
      <div className="Products">
        <Header />
        <Navbar />

        <section className="page-section">
          <div className="container">
            <div className="product-item">
              <div className="product-item-title d-flex">
                <div className="bg-faded p-5 d-flex ml-auto rounded">
                  <h2 className="section-heading mb-0">
                    <span className="section-heading-upper">Perfectly Brewed</span>
                    <span className="section-heading-lower">Our Coffees</span>
                  </h2>
                </div>
              </div>
              <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={Product1} alt="Product 1" />
              <div className="product-item-description d-flex mr-auto">
                <div className="bg-faded p-5 rounded">
                  <p className="mb-0">We take pride in brewing the most delicious coffee in Philadelphia. From cappuccinos and espressos, to iced beverages, and plain coffees, we make it all at Liberty Beans Coffee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <div className="product-item">
              <div className="product-item-title d-flex">
                <div className="bg-faded p-5 d-flex mr-auto rounded">
                  <h2 className="section-heading mb-0">
                    <span className="section-heading-upper">Delicious Snacks Too</span>
                    <span className="section-heading-lower">Bakery & Kitchen</span>
                  </h2>
                </div>
              </div>
              <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={Product2}
                alt="Product 2" />
              <div className="product-item-description d-flex ml-auto">
                <div className="bg-faded p-5 rounded">
                  <p className="mb-0">Our menu features delicious bakery goods and snacks that can be consumed at any time during the day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <div className="product-item">
              <div className="product-item-title d-flex">
                <div className="bg-faded p-5 d-flex ml-auto rounded">
                  <h2 className="section-heading mb-0">
                    <span className="section-heading-upper">Beans From Far Away</span>
                    <span className="section-heading-lower">Awesome Speciality Blends</span>
                  </h2>
                </div>
              </div>
              <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={Product3}
                alt="Product 3" />
              <div className="product-item-description d-flex mr-auto">
                <div className="bg-faded p-5 rounded">
                  <p className="mb-0">We take pride in offering special blends of coffee that are from all over the world! While we mainly import coffee from South America, we also bring Kenyan and Ethiopian blends from time to time. If interested, we do sell our blends so ask us in person for more details.
                  </p>
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

export default Products;