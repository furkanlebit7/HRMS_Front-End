import React from "react";
import "./JobAdvertisementList.css";

export default function JobAdvertisementList({
  advertisements,
  setAdvertisement,
}) {
  return (
    <div className="job_advertisement_list d-flex flex-column">
      <ul className="pl-0  border-std d-flex flex-column">
        {advertisements.map((advertisement) => (
          <li
            onClick={() => setAdvertisement(advertisement)}
            tabIndex="0"
            key={advertisement.id}
            className="job_advertisement_list_item p-std"
          >
            <div className="job_advertisement_list_item_img">
              <img src={advertisement.employer.companyLogo} />
            </div>
            <div className="job_advertisement_list_item_main">
              <p className="font-1">{advertisement.employer.companyName}</p>
              <p className="font-1">{advertisement.jobTitle.title}</p>
              <p>{advertisement.city.cityName}</p>
              <p className="mt-1">
                {advertisement.minSalary}₺ - {advertisement.maxSalary}₺
              </p>
            </div>
            <div className="main_page_job_date">
              <i className="far fa-heart "></i>
              <div className="main_page_job_date_date">
                {advertisement.lastDate}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <nav className="align-self-center" aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabindex="-1">
              Geri
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              2 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              İleri
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
