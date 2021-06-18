import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import "./MainPageJobs.css";

export default function MainPageJobs() {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getFourAdvertisement()
      .then((result) => setAdvertisements(result.data.data));
  }, []);
  return (
    <div className="main_page_jobs_container">
      <h3 className="main_page_title">İş İlanlarını Keşfet</h3>
      <p>
        Öneriler profilinize, iş tercihlerinize ve HRMS'deki etkinliğinize
        dayalıdır.
      </p>
      <div className="main_page_jobs ">
        {advertisements.map((advertisement) => (
          <div key={advertisement.id} className="main_page_job">
            <div className="main_page_job_img">
              <img src={advertisement.employer.companyLogo} />
            </div>
            <div className="main_page_job_body">
              <p className="main_page_job_body_company">
                {advertisement.employer.companyName}
              </p>
              <p className="main_page_job_body_job">
                {advertisement.jobTitle.title}
              </p>
              <p className="main_page_job_body_city">
                {advertisement.city.cityName}
              </p>
            </div>
            <div className="main_page_job_date">
              <i className="far fa-heart "></i>
              <div className="main_page_job_date_date">
                {advertisement.lastDate}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div href="#" className="see_all_link">
        Tüm İş ilanları<i class="fas fa-chevron-right"></i>
      </div>
    </div>
  );
}
