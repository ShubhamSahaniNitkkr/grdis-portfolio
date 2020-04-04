import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 bg-white rounded">
      <ul className="navbar-nav mt-lg-0 mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="!#">
            <i className="fas fa-home fa-lg text-primary"></i>&nbsp; Home{" "}
            <span className="sr-only">(current)</span>
          </a>
        </li>
      </ul>
      <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="">
            <i className="fas fa-file-alt fa-lg text-danger"></i> &nbsp;Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">
            <i className="fas fa-laptop-code fa-lg text-success"></i>{" "}
            &nbsp;Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
