import React, { Component } from "react";
import "../css/main.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer text-faded text-center py-5">
        <div className="container">
          <p className="m-0 small">Copyright &copy; KJS 2020</p>
        </div>
      </footer>
    );
  };
};

export default Footer;