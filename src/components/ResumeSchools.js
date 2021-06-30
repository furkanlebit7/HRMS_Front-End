import React, { useState } from "react";
import "./ResumeSchools.css";
import { Formik } from "formik";

export default function ResumeSchools({ resume }) {
  const [showForm, setShowForm] = useState(false);
  console.log(resume);

  const OpenFormHandler = () => {
    setShowForm(true);
  };
  const CloseFormHandler = () => {
    setShowForm(false);
  };
  return (
    <div>
      {resume.id && (
        <div class="card mt-5">
          <div class="card-header font-1 d-flex align-items-center justify-content-between">
            <h3 className="resume_onsoz_header text-main">Okul</h3>
            <button
              onClick={OpenFormHandler}
              className="resume_onsoz_header_button"
            >
              <i class="fas fa-plus-circle"></i>
            </button>
          </div>
          {resume.resumeSchools.map((school) => (
            <div
              key={school.id}
              class="card-body d-flex justify-content-between align-items-center"
            >
              <div>
                <i class="fas fa-graduation-cap fa-4x text-main"></i>
              </div>
              <div className="resume_item_body ml-5 ">
                <h5 className="font-1">{school.schoolName}</h5>
                <span>{school.degree} Derecesi, </span>
                <span> {school.department}</span>
                <p className="font-gray">
                  <span>{school.startedDate.substring(0, 4)} - </span>
                  {school.going ? (
                    <span>Devam Ediyor</span>
                  ) : (
                    <span>{school.endDate.substring(0, 4)}</span>
                  )}
                </p>
              </div>
              <div className="resume_item_body_actions">
                <button className="resume_onsoz_header_button">
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
          ))}
          {showForm && (
            <div>
              <hr />
              <div class="card-body d-flex justify-content-between align-items-center ">
                <Formik
                  initialValues={{
                    schoolName: "",
                    department: "",
                    startedDate: "",
                    endDate: "",
                    degree: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    let sD = new Date(values.startedDate);
                    let eD = new Date(values.endDate);
                    if (!values.schoolName) {
                      errors.schoolName = "Okul Adı alanı Zorunludur";
                    } else if (!values.department) {
                      errors.department = "Bölüm Adı Alanı Zorunludur";
                    } else if (!values.startedDate) {
                      errors.startedDate = "Başlangıç Tarihi Alanı Zorunludur";
                    } else if (!values.endDate) {
                      errors.endDate = "Bitiş Tarihi Alanı Zorunludur";
                    } else if (sD.getTime() >= eD.getTime()) {
                      errors.endDate =
                        "Bitiş Tarihi Başlangıç Tarihinden Önce Olamaz";
                      errors.startedDate =
                        "Başlangıç Tarihi Bitiş Tarihinden Sonra Olamaz";
                    }
                    return errors;
                  }}
                  onSubmit={(values) => {
                    console.log(values);
                    setShowForm(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      className=" text-start resume_school_ekle_form"
                    >
                      <div className="form-group mt-4">
                        <label htmlFor="schoolName">Okul Adı</label>
                        <input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.schoolName}
                          className="form-control"
                          id="schoolName"
                          type="text"
                        />
                        <small id="emailHelp" className="form-text text-danger">
                          {errors.schoolName &&
                            touched.schoolName &&
                            errors.schoolName}
                        </small>
                      </div>
                      <div className="form-group mt-4">
                        <label htmlFor="department">Bölüm Adı</label>
                        <input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.department}
                          className="form-control"
                          id="department"
                          type="text"
                        />
                        <small id="emailHelp" className="form-text text-danger">
                          {errors.department &&
                            touched.department &&
                            errors.department}
                        </small>
                      </div>
                      <div className="row">
                        <div className="form-group mt-4 col">
                          <label htmlFor="startedDate">Başlangıç Tarihi</label>
                          <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.startedDate}
                            className="form-control"
                            id="startedDate"
                            type="date"
                          />
                          <small
                            id="emailHelp"
                            className="form-text text-danger"
                          >
                            {errors.startedDate &&
                              touched.startedDate &&
                              errors.startedDate}
                          </small>
                        </div>
                        <div className="form-group mt-4 col">
                          <label htmlFor="endDate">Bitiş Tarihi</label>
                          <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.endDate}
                            className="form-control"
                            id="endDate"
                            type="date"
                          />
                          <small
                            id="emailHelp"
                            className="form-text text-danger"
                          >
                            {errors.endDate &&
                              touched.endDate &&
                              errors.endDate}
                          </small>
                        </div>
                        <div className="form-group mt-4 col">
                          <label htmlFor="degree">Derece</label>
                          <select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.degree}
                            className="form-control"
                            id="degree"
                            type="text"
                          >
                            <option value="Lise">Lise</option>
                            <option value="Ön Lisans">Ön Lisans</option>
                            <option value="Lisans">Lisans</option>
                            <option value="Yüksek Lisans">Yüksek Lisans</option>
                            <option value="Doktora">Doktora</option>
                          </select>
                          <small
                            id="emailHelp"
                            className="form-text text-danger"
                          >
                            {errors.degree && touched.degree && errors.degree}
                          </small>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-main mt-3">
                        Ekle
                      </button>
                      <button
                        type="button"
                        className="btn bg-main text-white mt-3 ml-3"
                        onClick={CloseFormHandler}
                      >
                        İptal
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
