import React from "react";
import Logo from "../image/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="logo" onClick={() => navigate("/")}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto px-lg-3">
              <a
                className="nav-link"
                href="/catalogue"
              >
                CATALOGUE
              </a>
              <a
                className="nav-link"
                href="/fashion"
              >
                FASHION
              </a>
              <a
                className="nav-link"
                href=""
                onClick={() => navigate("favourite")}
              >
                FAVOURITE
              </a>
              <a
                className="nav-link"
                href="/lifestyle"
              >
                LIFESTYLE
              </a>
            </div>
            <button type="button" class="btn btn-dark">
              SIGN UP
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
