import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Alert } from "react-bootstrap";
import "./AdvertisementPstBox.css";
import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitlesService";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function AdvertisementPostBox() {
  const [cities, setCities] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getAll().then((result) => setCities(result.data.data));

    let jobTitleService = new JobTitleService();
    jobTitleService.getAll().then((result) => setJobTitles(result.data.data));

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }, [showAlert]);

  let jobAdvertisementService = new JobAdvertisementService();
  return (
    <div className="advertisementPostBox">
      <div on class="alert alert-success d-none" role="alert">
        İş ilanı isteğiniz gönderildi. Tarafımızdan onaylandığında yayına
        alınacaktır!
      </div>
      <Formik
        initialValues={{
          createdDate: "",
          employerId: "",
          jobTitleId: "",
          cityId: "",
          jobFeature: "",
          jobType: "",
          minSalary: "",
          maxSalary: "",
          lastDate: "",
          numberOfPosition: "0",
          description: "",
        }}
        validate={(values) => {
          const errors = {};
          let today = new Date();
          let date = new Date(values.lastDate);
          if (!values.jobTitleId) {
            errors.jobTitleId = "İş pozisyonu alanı boş bırakılamaz";
          } else if (!values.cityId) {
            errors.cityId = "Şehir alanı boş bırakılamaz";
          } else if (!values.jobFeature) {
            errors.jobFeature = "İş türü alanı boş bırakılamaz";
          } else if (!values.jobType) {
            errors.jobType = "Çalışma türü alanı boş bırakılamaz";
          } else if (values.minSalary) {
            if (values.minSalary <= 0 || values.minSalary >= values.maxSalary) {
              errors.minSalary = "Maaş değerlerlerini düzgün giriniz";
            }
          } else if (values.maxSalary) {
            if (values.maxSalary <= 0 || values.minSalary >= values.maxSalary) {
              errors.maxSalary = "Maaş değerlerlerini düzgün giriniz";
            }
          } else if (!values.lastDate) {
            errors.lastDate = "Son tarih alanı boş bıraklıamaz";
          } else if (date.getTime() <= today.getTime()) {
            errors.lastDate = "Son tarih alanı geçmiş olamaz";
          } else if (!values.numberOfPosition) {
            errors.numberOfPosition = "Çalışan adedi boş bırakılamaz";
          } else if (values.numberOfPosition <= 0) {
            errors.numberOfPosition = "Çalışan adedi 0 veya negatif olamaz";
          } else if (!values.description) {
            errors.description = "Açıklama alanı boş olamaz";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          values.jobTitleId = parseInt(values.jobTitleId);
          values.cityId = parseInt(values.cityId);
          jobAdvertisementService.add(values).then();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          dirty,
        }) => (
          <form onSubmit={handleSubmit} className=" text-start">
            {showAlert && (
              <Alert
                variant="success"
                onClose={() => setShowAlert(false)}
                dismissible
              >
                <b>Başarılı!</b> İlanınız tarafımızdan onaylandığında yayına
                alınacaktır...
              </Alert>
            )}

            <div className="form-group">
              <label htmlFor="employerId">
                EmployerId ------------------- "Login Logout geldiğinde burası
                kalkacak"
              </label>
              <input
                id="employerId"
                type="number"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.employerId}
              />
              <small id="emailHelp" className="form-text text-danger">
                {errors.employerId && touched.employerId && errors.employerId}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="jobTitleId">İş Pozisyonu</label>
              <select
                className="form-control"
                id="jobTitleId"
                aria-describedby="emailHelp"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.jobTitleId}
              >
                <option value="">--</option>
                {jobTitles.map((jobTitle) => (
                  <option key={jobTitle.id} value={jobTitle.id}>
                    {jobTitle.title}
                  </option>
                ))}
              </select>

              <small id="emailHelp" className="form-text text-danger">
                {errors.jobTitle && touched.jobTitle && errors.jobTitle}
              </small>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="cityId">Şehir</label>
              <select
                className="form-control"
                id="cityId"
                aria-describedby="emailHelp"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cityId}
              >
                <option value="">--</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.cityName}
                  </option>
                ))}
              </select>
              <small id="emailHelp" className="form-text text-danger">
                {errors.city && touched.city && errors.city}
              </small>
            </div>

            <div className="row mt-2">
              <div className="col form-group">
                <label htmlFor="jobFeature">İş Türü</label>
                <select
                  className="form-control"
                  id="jobFeature"
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.jobFeature}
                >
                  <option value="">--</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Anlaşmalı">Anlaşmalı</option>
                  <option value="Staj">Staj</option>
                  <option value="Geçici">Geçici</option>
                </select>
                <small id="emailHelp" className="form-text text-danger">
                  {errors.jobFeature && touched.jobFeature && errors.jobFeature}
                </small>
              </div>
              <div className="col form-group">
                <label htmlFor="jobType">Çalışma Türü</label>
                <select
                  className="form-control"
                  id="jobType"
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.jobType}
                >
                  <option value="">--</option>
                  <option value="Normal">Normal</option>
                  <option value="Yarı Remote">Yarı Remote</option>
                  <option value="Remote">Remote</option>
                </select>
                <small id="emailHelp" className="form-text text-danger">
                  {errors.jobType && touched.jobType && errors.jobType}
                </small>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col">
                <label htmlFor="minSalary">Min Maaş</label>
                <input
                  id="minSalary"
                  type="number"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.minSalary}
                />
                <small id="emailHelp" className="form-text text-danger">
                  {errors.minSalary && touched.minSalary && errors.minSalary}
                </small>
              </div>
              <div className="col">
                <label htmlFor="maxSalary">Max Maaş</label>
                <input
                  id="maxSalary"
                  type="number"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.maxSalary}
                />
                <small id="emailHelp" className="form-text text-danger">
                  {errors.maxSalary && touched.maxSalary && errors.maxSalary}
                </small>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="lastDate">Son Tarih</label>
                <input
                  id="lastDate"
                  type="date"
                  className="form-control"
                  placeholder="First name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastDate}
                />
                <small id="emailHelp" className="form-text text-danger">
                  {errors.lastDate && touched.lastDate && errors.lastDate}
                </small>
              </div>
              <div className="col">
                <label htmlFor="numberOfPosition">Çalışan Adedi</label>
                <input
                  id="numberOfPosition"
                  type="number"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.numberOfPosition}
                />
                <small id="emailHelp" className="form-text text-danger">
                  {errors.numberOfPosition &&
                    touched.numberOfPosition &&
                    errors.numberOfPosition}
                </small>
              </div>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="description">Açıklama</label>
              <textarea
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className="form-control"
                id="description"
                rows="3"
              ></textarea>
              <small id="emailHelp" className="form-text text-danger">
                {errors.description &&
                  touched.description &&
                  errors.description}
              </small>
            </div>
            <button
              type="submit"
              className="block-button mt-3"
              disabled={isSubmitting}
            >
              İlan Ver
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
