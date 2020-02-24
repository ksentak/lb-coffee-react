import React, { Component } from "react";
import "../css/main.css";

class Header extends Component {
	render() {
		return (
			<h1 className="site-heading text-center text-white d-none d-lg-block">
				<span className="site-heading-upper text-primary mb-3">Liberty Beans Coffee</span>
				<span className="site-heading-lower">Philly's favorite coffee spot since '03</span>
			</h1>
		);
	};
};

export default Header;