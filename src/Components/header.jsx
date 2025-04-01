import { NavLink } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <i class="bi bi-globe-central-south-asia logo"></i>The Map
            <span id="span1">Adventures</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav me-auto text-uppercase">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="the-map/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="the-map/destination" className="nav-link">
                  Destination
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="the-map/blog" className="nav-link">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="the-map/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
