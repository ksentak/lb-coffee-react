import React, { Component } from "react";
import "../css/main.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Barista from "../images/barista.jpg";


class Home extends Component {
	render() {
		return (
			<div className="Home">
				<Header />
				<Navbar />

				<section class="page-section clearfix">
					<div class="container">
						<div class="intro">
							<img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src={Barista} alt="Barista"/>
							<div class="intro-text left-0 text-center bg-faded p-5 rounded">
								<h2 class="section-heading mb-4">
									<span class="section-heading-upper">Fresh Coffee</span>
									<span class="section-heading-lower">Delicious to Drink</span>
								</h2>
								<p class="mb-3">Each cup of our famous coffee is made with the freshest ingrediants. Come try our coffee
								  sometime and we promise that you'll fall in love with it!
          						</p>
								<div class="intro-button mx-auto">
									<a class="btn btn-primary btn-xl" target="_blank"  rel="noopener noreferrer" href="https://www.google.com/maps">Visit Us! (Maps Link)</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="page-section cta">
					<div class="container">
						<div class="row">
							<div class="col-xl-9 mx-auto">
								<div class="cta-inner text-center rounded">
									<h2 class="section-heading mb-4">
										<span class="section-heading-upper">Our Guarentee</span>
										<span class="section-heading-lower">To You</span>
									</h2>
									<p class="mb-0">When you come in to grab your morning cup of joe, we strive to provide the utmost
									  satisfaction by providing the best ingrediants possible, a fantastic atmosphere, and excellent customer
									  service.
            						</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	};
};

export default Home;