import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/actions/authActions";

export default function Navibar() {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
  };

  return (
    <>
      <nav className="navbar navbar-light ">
        <div className="container-xxl d-flex align-items-center justify-content-between">
          <Link to="/">
            <img src="logo.png" width="130px" />
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
              className="btn "
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="far fa-user"></i>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/userprofile/profile">
                Profil
              </Link>
              <Link className="dropdown-item" to="/userprofile/userresume">
                Özgeçmiş
              </Link>
              <Link
                className="dropdown-item"
                to="/userprofile/userjobpreferences"
              >
                İş Tercihi
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="userprofile">
                Yardım Merkezi
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                onClick={logOutHandler}
                className="dropdown-item"
                to="userprofile"
              >
                Çıkış Yap
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
