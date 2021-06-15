import React from "react";
import "./Navbar2.css";

export default function Navbar2() {
  return (
    <div>
      <div className=" navbar2">
        <div className="container d-flex align-items-center justify-content-between">
          <h5 className="navbar2_text">
            Merhaba, bugün ne keşfetmek istersin?
          </h5>
          <ul className="d-flex">
            <li className="dropdown_button">
              İşveren İçin
              <ul className="dropdown_menu">
                <li>İşveren Hesabını Onayla</li>
                <div class="dropdown-divider"></div>
                <li>İş İlanı Paylaş</li>
                <div class="dropdown-divider"></div>
                <li>İşveren Markası</li>
                <li>İşveren Blogu</li>
              </ul>
            </li>
            <li className="dropdown_button">İş İlanı Paylaş</li>
          </ul>
        </div>
        <ul className="d-flex align-items-center justify-content-start navbar2_down container">
          <li className="d-flex align-items-center">
            <i class="fas fa-business-time"></i>
            <h6 className="mt-2">Jobs</h6>
          </li>
          <li className="d-flex align-items-center">
            <i class="fas fa-building"></i>
            <h6 className="mt-2">Companies</h6>
          </li>
          <li className="d-flex align-items-center">
            <i class="fas fa-money-bill-wave"></i>
            <h6 className="mt-2">Salaries</h6>
          </li>
          <li className="d-flex align-items-center">
            <i class="far fa-comments"></i>
            <h6 className="mt-2">Intervievs</h6>
          </li>
        </ul>
      </div>
    </div>
  );
}
