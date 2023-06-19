import * as bootstrap from "bootstrap";
// import { BsFillCartCheckFill } from "react-icons";
import { SlUser } from "react-icons/sl";

import "./style.css";
function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-pink">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="src/components/navigation/images/logo.webp"
              alt="MUM"
              srcSet=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact US</a>
              </li>
              <li className="nav-item">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Product"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-dark text-pink"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link">
                  <SlUser />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
