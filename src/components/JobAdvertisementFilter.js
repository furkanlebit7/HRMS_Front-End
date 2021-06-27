import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import "./JobAdvertisementFilter.css";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import CityService from "../services/cityService";

export default function JobAdvertisementFilter() {
  const [cities, setCities] = useState([]);
  const [salaries, setSalaries] = useState({ min: 0, max: 20000 });

  useEffect(() => {
    let cityService = new CityService();
    cityService.getAll().then((result) => setCities(result.data.data));
  }, []);

  return (
    <div className="job_advertisement_filter mt-1">
      <Formik
        initialValues={{
          jobType: "",
          createdDate: "",
          minSalary: "0",
          maxSalary: "20000",
          jobFeature: "",
          city: "",
        }}
        onSubmit={(values) => {
          values.minSalary = salaries.min;
          values.maxSalary = salaries.max;
          console.log(values);
        }}
      >
        {({ handleBlur, values, handleChange, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="job_advertisement_filter_forms"
          >
            <select
              id="jobType"
              value={values.jobType}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control job_advertisement_filter_form"
            >
              <option value="">Bütün İş Türleri</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Anlaşmalı">Anlaşmalı</option>
              <option value="Staj">Staj</option>
              <option value="Geçici">Geçici</option>
            </select>
            <select
              id="createdDate"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.createdDate}
              className="form-control job_advertisement_filter_form"
            >
              <option value="">Herhangi bir zamanda</option>
              <option value="Dün">Dün</option>
              <option value="Son 3 Gün">Son 3 Gün</option>
              <option value="Son 1 Hafta">Son 1 Hafta</option>
              <option value="Son 1 Ay">Son 1 Ay</option>
            </select>

            <div className="form-group">
              <InputRange
                className="input_range"
                maxValue={20000}
                minValue={0}
                formatLabel={(value) => `${value} ₺`}
                value={salaries}
                onChange={(value) => setSalaries(value)}
              />
            </div>
            <select
              id="jobFeature"
              value={values.jobFeature}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control job_advertisement_filter_form"
            >
              <option value="">Bütün Çalışma Türleri</option>
              <option value="Normal">Normal</option>
              <option value="Remote">Remote</option>
              <option value="Yarı Remote">Yarı Remote</option>
            </select>
            <select
              id="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control job_advertisement_filter_form"
            >
              <option>Bütün Şehirler</option>
              {cities.map((city) => (
                <option value={city.id} key={city.id}>
                  {city.cityName}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="job_advertisement_filter_button btn btn-primary"
            >
              <i className="fas fa-search"></i>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
