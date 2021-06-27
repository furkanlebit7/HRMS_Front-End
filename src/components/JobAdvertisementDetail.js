import React from "react";
import "./JobAdvertisementDetail.css";

export default function JobAdvertisementDetail({ advertisement }) {
  return (
    <div className="job_advertisement_detail">
      {advertisement.id && advertisement.employer.companyBanner && (
        <div className="job_advertisement_detail_img">
          <img src={advertisement.employer.companyBanner} />
        </div>
      )}
      {advertisement.id && (
        <div className="job_advertisement_detail_body d-flex flex-column">
          <div className="p-std job_advertisement_detail_body_header d-flex align-items-center justify-content-between">
            <div className="job_advertisement_detail_body_company d-flex flex-column align-items-start">
              <p>{advertisement.employer.companyName}</p>
              <h4>{advertisement.jobTitle.title}</h4>
              <p>{advertisement.city.cityName}</p>
            </div>
            <div className="job_advertisement_detail_body_apply d-flex align-items-center justify-content-center">
              <button type="button" className="btn btn-primary mr-3">
                <i class="fas fa-signature mr-2"></i> Başvur
              </button>
              <button type="button" className="btn btn-primary mr-3">
                <i class="far fa-heart mr-2"></i>Kaydet
              </button>
              <div className="dropdown">
                <button
                  className=" job_advertisement_dropdown btn "
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-h"></i>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    <i class="far fa-flag mt-2"></i> Şikayet Et
                  </a>
                  <a className="dropdown-item" href="#">
                    <i class="fas fa-share-alt mr-2"></i> Paylaş
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-std job_advertisement_detail_body_description">
            {advertisement.description}
          </div>
          <ul className=" p-std job_advertisement_detail_body_detail d-flex flex-column align-items-start font-1 my-5">
            <li>
              <b className="mr-4">İş Türü : </b>
              {advertisement.jobFeature}
            </li>
            <li>
              <b className="mr-4">Yayınlanma Tarihi : </b>
              {advertisement.createdDate}
            </li>
            <li>
              <b className="mr-4">Son Başvuru Tarihi : </b>
              {advertisement.lastDate}
            </li>
            <li>
              <b className="mr-4">İş Tipi : </b>
              {advertisement.jobType}
            </li>
            <li>
              <b className="mr-4">Açık Pozisyon Adedi : </b>
              {advertisement.numberOfPosition}
            </li>
            <li>
              <b>Maaş Aralığı : </b>
              {advertisement.minSalary}₺ - {advertisement.maxSalary}₺
            </li>
          </ul>
          <div className=" p-std job_advertisement_detail_body_website">
            <button type="button" class="btn btn-primary btn-m btn-block">
              Go to Website
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
