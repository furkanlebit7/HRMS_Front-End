import React, { Component } from "react";
import "./JobAdvertisementBox.css";

class JobAdvertisementBox extends Component {
  render() {
    const advertisement = this.props.advertisement;
    return (
      <div className="card_body" key={advertisement.id}>
        <div className="card_company d-flex flex-column justify-content-start align-items-center">
          <div className="card_img flex">
            <img src={advertisement.employer.companyLogo} width="70px" />
          </div>
          <p className="card_date">{advertisement.lastDate}</p>
        </div>
        <div className="card_job d-flex flex-column justify-content-start align-items-start">
          <h4>{advertisement.jobTitle.title}</h4>
          <p className="card_company_name">
            {advertisement.employer.companyName}
          </p>
          <p className="card_company_description">
            {advertisement.description}
          </p>
        </div>
        <ul className="d-flex flex-column justify-content-between">
          <li className="card_list_item d-flex">
            <span className="me-md-4">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span>{advertisement.city.cityName}</span>
          </li>
          <li className="card_list_item d-flex ">
            <span className="me-md-4">
              <i className="fas fa-money-bill-wave-alt"></i>
            </span>
            <span>
              {advertisement.minSalary}-{advertisement.maxSalary} ₺
            </span>
          </li>
          <li className="card_list_item d-flex ">
            <span className="me-md-4">
              <i className="fas fa-user-friends"></i>
            </span>
            <span>{advertisement.numberOfPosition}</span>
          </li>
          <li className="card_list_item">
            <button className="advertisement_card_button">Detaylar</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default JobAdvertisementBox;
