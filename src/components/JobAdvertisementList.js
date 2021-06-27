import React, { useEffect, useState } from "react";
import "./JobAdvertisementList.css";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementList({
  advertisements,
  setAdvertisement,
  pageableSizeHandler,
  pageablePageHandler,
}) {
  const [pageSize, setPageSize] = useState();

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAll()
      .then((result) => setPageSize(Math.ceil(result.data.data.length / 10)));
  }, []);
  let rows = [];
  for (let i = 1; i <= pageSize; i++) {
    rows.push(i);
  }

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
      <div className="d-flex align-items-center justify-content-around">
        <nav className="align-self-center" aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <p className="page-link" tabindex="-1">
                Geri
              </p>
            </li>
            {rows.map((row) => (
              <li
                className="page-item"
                onClick={() => pageablePageHandler(row)}
              >
                <p className="page-link">{row}</p>
              </li>
            ))}
            <li className="page-item">
              <p className="page-link">İleri</p>
            </li>
          </ul>
        </nav>
        <nav aria-label="...">
          <ul class="pagination pagination-sm">
            <li class="page-item" onClick={() => pageableSizeHandler(10)}>
              <p class="page-link" tabindex="-1">
                10
              </p>
            </li>
            <li class="page-item" onClick={() => pageableSizeHandler(20)}>
              <p class="page-link">20</p>
            </li>
            <li class="page-item" onClick={() => pageableSizeHandler(50)}>
              <p class="page-link">50</p>
            </li>
            <li class="page-item" onClick={() => pageableSizeHandler(100)}>
              <p class="page-link">100</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
