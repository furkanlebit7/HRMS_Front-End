import React, { useEffect, useState } from "react";
import "./MainPageJobAlert.css";
import { Formik } from "formik";
import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitlesService";
import { Alert } from "react-bootstrap";

export default function MainPageJobAlert() {
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
    }, 10000);
  }, [showAlert]);

  return (
    <div className="create_job_alert_container mt-5">
      {showAlert && (
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Belirlediğiniz kriterlere uygun iş ilanı yayınlandığında size
          bildireceğiz
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              setShowAlert(false);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      <div className="create_job_alert border-std p-std mt-3 flex-column justify-content-between">
        <div className="create_job_alert_top d-flex font-2">
          <i class="far fa-bell fa-2x mr-3"></i>
          <p className="">
            <b>Kaçırmayın! </b>Tercihlerinize uygun işleri yayınlandıkları anda
            bildirim alın.
          </p>
        </div>
        <div className="create_job_alert_bottom d-flex font-2 ml-5">
          <Formik
            initialValues={{
              jobTitleId: "",
              cityId: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.jobTitleId) {
                errors.jobTitleId = "Lütfen iş ünvanını seçiniz";
              } else if (!values.cityId) {
                errors.cityId = "Lütfen şehir seçiniz";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              values.jobTitleId = parseInt(values.jobTitleId);
              values.cityId = parseInt(values.cityId);
              console.log(values);
              setShowAlert(true);
              resetForm();
              setSubmitting(false);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <label htmlFor="selectPosition">İş Pozisyonu</label>
                    <select
                      className="form-control"
                      id="jobTitleId"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.jobTitleId}
                    >
                      <option key="">--</option>
                      {jobTitles.map((jT) => (
                        <option key={jT.id} value={jT.id}>
                          {jT.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col">
                    <label htmlFor="selectCity">Şehir</label>
                    <select
                      className="form-control"
                      id="cityId"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.cityId}
                    >
                      <option key="">--</option>
                      {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.cityName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="get_alert_button"
                    disabled={isSubmitting}
                  >
                    Bildirim al
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
