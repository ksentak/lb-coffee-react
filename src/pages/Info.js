import React, { Component } from "react";
import "../css/main.css";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <Header />
        <Navbar />
        <section className="page-section cta">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <div className="cta-inner text-center rounded">
                  <h2 className="section-heading mb-5">
                    <span className="section-heading-upper">Come On In</span>
                    <span className="section-heading-lower">We're Open</span>
                  </h2>
                  <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                    <li className="list-unstyled-item list-hours-item d-flex">
                      Sunday
                      <span className="ml-auto">7:00 AM to 4:00 PM</span>
                    </li>
                    <li className="list-unstyled-item list-hours-item d-flex">
                      Monday
                      <span className="ml-auto">5:00 AM to 8:00 PM</span>
                    </li>
                    <li class="list-unstyled-item list-hours-item d-flex">
                      Tuesday
                      <span className="ml-auto">5:00 AM to 8:00 PM</span>
                    </li>
                    <li className="list-unstyled-item list-hours-item d-flex">
                      Wednesday
                      <span className="ml-auto">5:00 AM to 8:00 PM</span>
                    </li>
                    <li className="list-unstyled-item list-hours-item d-flex">
                      Thursday
                      <span className="ml-auto">5:00 AM to 8:00 PM</span>
                    </li>
                    <li className="list-unstyled-item list-hours-item d-flex">
                      Friday
                      <span className="ml-auto">5:00 AM to 8:00 PM</span>
                    </li>
                    <li className="list-unstyled-item list-hours-item d-flex">
                      Saturday
                      <span className="ml-auto">7:00 AM to 4:00 PM</span>
                    </li>
                  </ul>
                  <p className="address mb-5">
                    <em>
                      <strong>1000 Market St</strong>
                      <p>Philadelphia, PA</p>
                    </em>
                  </p>
                  <p className="mb-0">
                    <small><em>Call Anytime</em></small>
                    <p>(215) 888-8888</p>
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

export default Info;