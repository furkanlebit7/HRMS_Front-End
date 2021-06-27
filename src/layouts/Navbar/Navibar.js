import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navibar() {
  return (
    <>
      <nav className="navbar navbar-light ">
        <div className="container-xxl d-flex align-items-center justify-content-between">
          <Link to="/">
            <img src="logo.svg" width="130px" />
          </Link>
          <form className="form-group d-flex flex-row ">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Search for job titles, companies, or keywords"
            />
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Location"
            />
            <button className="btn navbtn">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="far fa-user"></i>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Profiles
              </a>
              <a className="dropdown-item" href="#">
                Resumes
              </a>
              <a className="dropdown-item" href="#">
                Job Preferences
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Account Settings
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Help Center
              </a>
              <a className="dropdown-item" href="#">
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
