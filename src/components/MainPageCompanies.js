import React, { useState, useEffect } from "react";
import "./MainPageCompany.css";
import EmployerService from "../services/employerService";

export default function MainPageCompanies() {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployerThree()
      .then((result) => setCompanies(result.data.data));
  }, []);
  return (
    <div className="main_page_companies_container mt-5 mb-5">
      <h3 className="main_page_title">Şirketleri Keşfet</h3>
      <div className="row main_page_comiany_cards">
        {companies.map((company) => (
          <div
            key={company.id}
            className="col main_page_comiany_card border-std"
          >
            <div className="main_page_comiany_card_up">
              <img
                className="main_page_comiany_card_banner"
                src={company.companyBanner}
              />
              <div className="main_page_comiany_card_image_side">
                <img
                  className="main_page_comiany_card_image"
                  src={company.companyLogo}
                />
                <a href={company.webAdress}>Website</a>
                <p className="font-2">{company.companyName}</p>
              </div>
            </div>
            <div className="main_page_comiany_card_down d-flex flex-column justify-content-center">
              <div className="main_page_company_car_statistics d-flex justify-content-evenly">
                <div className="main_page_company_car_statistic d-flex flex-column align-items-center">
                  <p>
                    <b>123K</b>
                  </p>
                  <p>Jobs</p>
                </div>
                <div className="main_page_company_car_statistic d-flex flex-column">
                  <p>
                    <b>123K</b>
                  </p>
                  <p>Reviews</p>
                </div>
                <div className="main_page_company_car_statistic d-flex flex-column">
                  <p>
                    <b>123K</b>
                  </p>
                  <p>Salaries</p>
                </div>
              </div>
              <div className="main_page_company_button_container d-flex align-items-center justify-content-center mt-2">
                <button className="main_page_company_button">Follow</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div href="#" className="see_all_link">
        Tüm Şirketler<i class="fas fa-chevron-right"></i>
      </div>
    </div>
  );
}
