import React from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";

export default function Navbar2() {
  return (
    <div>
      <div className=" navbar2 container-xxl">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="navbar2_text">
            Merhaba, bugün ne keşfetmek istersin?
          </h5>
          <ul className="d-flex">
            <li className="dropdown_button">
              İşveren İçin
              <ul className="dropdown_menu">
                <li>İşveren Hesabını Onayla</li>
                <div className="dropdown-divider"></div>
                <li>İş İlanı Paylaş</li>
                <div className="dropdown-divider"></div>
                <li>İşveren Markası</li>
                <li>İşveren Blogu</li>
              </ul>
            </li>
            <li className="dropdown_button">İş İlanı Paylaş</li>
          </ul>
        </div>
        <ul className=" navbar2_down">
          <Link className="navbar2_item" to="/jobs">
            <li className="d-flex align-items-center navbar2_down_item ">
              <i class="fas fa-business-time"></i>
              <h6 className="mt-2">Jobs</h6>
            </li>
          </Link>
          <Link className="navbar2_item" to="/companies">
            <li className="d-flex align-items-center navbar2_down_item">
              <i className="fas fa-building"></i>
              <h6 className="mt-2">Companies</h6>
            </li>
          </Link>
          <Link className="navbar2_item" to="/salaries">
            <li className="d-flex align-items-center navbar2_down_item">
              <i className="fas fa-money-bill-wave"></i>
              <h6 className="mt-2">Salaries</h6>
            </li>
          </Link>
          <Link className="navbar2_item" to="/intervievs">
            <li className="d-flex align-items-center navbar2_down_item">
              <i className="far fa-comments"></i>
              <h6 className="mt-2">Intervievs</h6>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
