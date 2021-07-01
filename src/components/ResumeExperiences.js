import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import ResumeExperienceService from "../services/resumeExperienceService";
import JobTitlesService from "../services/jobTitlesService";

export default function ResumeExperiences({ resume, triggerResume }) {
  const [showForm, setShowForm] = useState(false);
  const [jobTitles, setJobTitles] = useState([]);
  const [experiences, setExperiences] = useState([]);

  let jobTitlesService = new JobTitlesService();
  let resumeExperienceService = new ResumeExperienceService();

  useEffect(() => {
    jobTitlesService.getAll().then((result) => setJobTitles(result.data.data));
  }, []);

  useEffect(() => {
    resumeExperienceService
      .getExperiencesByResumeId(resume.id)
      .then((result) => setExperiences(result.data.data));
  }, [resume]);

  const OpenFormHandler = () => {
    setShowForm(true);
  };
  const CloseFormHandler = () => {
    setShowForm(false);
  };
  const experienceRemoveHandler = (id) => {
    resumeExperienceService.removeById(id);
  };
  return (
    <div>
      {resume.id && (
        <div class="card mt-5">
          <div class="card-header font-1 d-flex align-items-center justify-content-between">
            <h3 className="resume_onsoz_header text-main">Deneyim</h3>
            <button
              onClick={OpenFormHandler}
              className="resume_onsoz_header_button"
            >
              <i class="fas fa-plus-circle"></i>
            </button>
          </div>
          {experiences &&
            experiences.map((experience) => (
              <div
                key={experience.id}
                class="card-body d-flex justify-content-between align-items-center"
              >
                <div>
                  <i class="fas fa-building fa-3x text-main"></i>
                </div>
                <div className="resume_item_body ml-5 ">
                  <h5 className="font-1">{experience.workplaceName}</h5>
                  <span>{experience.jobTitle.title}</span>
                  <p className="font-gray">
                    <span>{experience.startedDate.substring(0, 4)} - </span>
                    {experience.going ? (
                      <span>Devam Ediyor</span>
                    ) : (
                      <span>{experience.endDate.substring(0, 4)}</span>
                    )}
                  </p>
                </div>
                <div className="resume_item_body_actions">
                  <button
                    onClick={function () {
                      experienceRemoveHandler(experience.id);
                      triggerResume();
                    }}
                    className="resume_onsoz_header_button"
                  >
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
                    workplaceName: "",
                    jobTitleId: "",
                    startedDate: "",
                    endDate: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    let sD = new Date(values.startedDate);
                    let eD = new Date(values.endDate);
                    let today = new Date();
                    if (!values.workplaceName) {
                      errors.workplaceName = "İş Yeri Adı alanı Zorunludur";
                    } else if (!values.startedDate) {
                      errors.startedDate = "Başlangıç Tarihi Alanı Zorunludur";
                    } else if (!values.jobTitleId) {
                      errors.jobTitleId = "İş Pozisyonu Alanı Zorunludur";
                    } else if (!values.endDate) {
                      errors.endDate = "Bitiş Tarihi Alanı Zorunludur";
                    } else if (today.getTime() <= sD.getTime()) {
                      errors.startedDate =
                        "Başlangıç Tarihi İleri Bir Tarih Olamaz";
                    } else if (sD.getTime() >= eD.getTime()) {
                      errors.endDate =
                        "Bitiş Tarihi Başlangıç Tarihinden Önce Olamaz";
                      errors.startedDate =
                        "Başlangıç Tarihi Bitiş Tarihinden Sonra Olamaz";
                    } else if (today.getTime() >= eD.getTime()) {
                      values.going = false;
                    } else if (today.getTime() < eD.getTime()) {
                      values.going = true;
                    }
                    return errors;
                  }}
                  onSubmit={(values) => {
                    let resumeExperience = values;
                    resumeExperience.jobTitleId = parseInt(values.jobTitleId);
                    resumeExperience.resumeId = resume.id;
                    resumeExperienceService.add(resumeExperience);
                    setShowForm(false);
                    triggerResume();
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
                        <label htmlFor="workplaceName">İş Yeri Adı</label>
                        <input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.workplaceName}
                          className="form-control"
                          id="workplaceName"
                          type="text"
                        />
                        <small id="emailHelp" className="form-text text-danger">
                          {errors.workplaceName &&
                            touched.workplaceName &&
                            errors.workplaceName}
                        </small>
                      </div>

                      <div className="form-group mt-4">
                        <label htmlFor="jobTitleId">İş Pozisyonu</label>
                        <select
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.jobTitleId}
                          className="form-control"
                          id="jobTitleId"
                          type="text"
                        >
                          <option value="">İş Pozisyonu Seçin</option>
                          {jobTitles.map((jobTitle) => (
                            <option key={jobTitle.id} value={jobTitle.id}>
                              {jobTitle.title}
                            </option>
                          ))}
                        </select>
                        <small id="emailHelp" className="form-text text-danger">
                          {errors.jobTitleId &&
                            touched.jobTitleId &&
                            errors.jobTitleId}
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
