import React from "react";
import "./navbar.css";

export default function Navibar() {
  return (
    <>
      <nav class="navbar navbar-light ">
        <div className="container d-flex align-items-center justify-content-between">
          <img src="logo.svg" width="130px" />
          <form class="form-group d-flex flex-row ">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Search for job titles, companies, or keywords"
            />
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Location"
            />
            <button className="btn navbtn">
              <i class="fas fa-search"></i>
            </button>
          </form>
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="far fa-user"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Profiles
              </a>
              <a class="dropdown-item" href="#">
                Resumes
              </a>
              <a class="dropdown-item" href="#">
                Job Preferences
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Account Settings
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Help Center
              </a>
              <a class="dropdown-item" href="#">
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
