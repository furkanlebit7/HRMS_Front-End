import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import LanguageService from "../services/languageService";
import ResumeLanguageService from "../services/resumeLanguageService";

export default function ResumeLanguages({ resume, triggerResume }) {
  const [showForm, setShowForm] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [resumeLanguages, setResumeLanguages] = useState([]);

  let resumeLanguageService = new ResumeLanguageService();
  let languageService = new LanguageService();

  useEffect(() => {
    languageService.getAll().then((result) => setLanguages(result.data.data));
  }, []);
  useEffect(() => {
    resumeLanguageService
      .getByResumeId(resume.id)
      .then((result) => setResumeLanguages(result.data.data));
  }, [resume]);

  const OpenFormHandler = () => {
    setShowForm(true);
  };
  const CloseFormHandler = () => {
    setShowForm(false);
  };
  const languageRemoveHandler = (id) => {
    resumeLanguageService.removeById(id);
  };

  const starHandler = (x) => {
    let rows = [];
    for (let i = 1; i <= x; i++) {
      rows.push(i);
    }
    return rows;
  };
  return (
    <div>
      {resume.id && (
        <div class="card mt-5">
          <div class="card-header font-1 d-flex align-items-center justify-content-between">
            <h3 className="resume_onsoz_header text-main">Dil</h3>
            <button
              onClick={OpenFormHandler}
              className="resume_onsoz_header_button"
            >
              <i class="fas fa-plus-circle"></i>
            </button>
          </div>
          {resumeLanguages &&
            resumeLanguages.map((language) => (
              <div
                key={language.id}
                class="card-body d-flex justify-content-between align-items-center"
              >
                <div>
                  <i class="fas fa-language fa-3x text-main"></i>
                </div>
                <div className="row" style={{ flexGrow: "1" }}>
                  <div className="col ml-5">
                    <h5 className="font-1">{language.language.languageName}</h5>
                  </div>
                  <div className="col">
                    {starHandler(language.languageLevel).map((star) => (
                      <i class="fas fa-star text-main"></i>
                    ))}
                  </div>
                </div>

                <div className="resume_item_body_actions">
                  <button
                    onClick={function () {
                      languageRemoveHandler(language.id);
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
                    languageId: "",
                    languageLevel: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.languageId) {
                      errors.languageId = "Lütfen Dil Seçiniz";
                    } else if (!values.languageLevel) {
                      errors.languageLevel = "Lütfen Dil Seviyesi Seçin";
                    }
                    return errors;
                  }}
                  onSubmit={(values) => {
                    let language = values;
                    language.languageId = parseInt(values.languageId);
                    language.languageLevel = parseInt(values.languageLevel);
                    language.resumeId = resume.id;
                    resumeLanguageService.add(language);
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
                      <div className="row">
                        <div className="form-group mt-4 col-6">
                          <label htmlFor="languageId">Dil</label>
                          <select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.languageId}
                            className="form-control"
                            id="languageId"
                            type="text"
                          >
                            <option value="">Dil Seçin</option>
                            {languages.map((language) => (
                              <option key={language.id} value={language.id}>
                                {language.languageName}
                              </option>
                            ))}
                          </select>
                          <small
                            id="emailHelp"
                            className="form-text text-danger"
                          >
                            {errors.languageId &&
                              touched.languageId &&
                              errors.languageId}
                          </small>
                        </div>
                        <div className="form-group mt-4 col-6">
                          <label htmlFor="languageLevel">Seviye</label>
                          <select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.languageLevel}
                            className="form-control"
                            id="languageLevel"
                            type="text"
                          >
                            <option value="">Dil Seviyesi Seçin</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <small
                            id="emailHelp"
                            className="form-text text-danger"
                          >
                            {errors.languageLevel &&
                              touched.languageLevel &&
                              errors.languageLevel}
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
