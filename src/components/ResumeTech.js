import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import TechService from "../services/techService";
import ResumeTechService from "../services/resumeTechService";

export default function ResumeTech({ resume, triggerResume }) {
  const [showForm, setShowForm] = useState(false);
  const [techs, setTechs] = useState([]);
  const [resumeTechs, setResumeTechs] = useState([]);

  let resumeTechService = new ResumeTechService();
  let techService = new TechService();

  useEffect(() => {
    techService.getAll().then((result) => setTechs(result.data.data));
  }, []);
  useEffect(() => {
    resumeTechService
      .getByResumeId(resume.id)
      .then((result) => setResumeTechs(result.data.data));
  }, [resume]);

  const OpenFormHandler = () => {
    setShowForm(true);
  };
  const CloseFormHandler = () => {
    setShowForm(false);
  };
  const techRemoveHandler = (id) => {
    resumeTechService.removeById(id);
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
          {resumeTechs &&
            resumeTechs.map((tech) => (
              <div
                key={tech.id}
                class="card-body d-flex justify-content-between align-items-center"
              >
                <div>
                  <i class="fas fa-angle-right fa-3x text-main"></i>
                </div>
                <div className="resume_item_body ml-5 ">
                  <h5 className="font-1">{tech.techs.techName}</h5>
                </div>

                <div className="resume_item_body_actions">
                  <button
                    onClick={function () {
                      techRemoveHandler(tech.id);
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
                    techsId: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.techsId) {
                      errors.techsId = "Lütfen Teknoloji Seçiniz";
                    }
                    return errors;
                  }}
                  onSubmit={(values) => {
                    let tech = values;
                    tech.techsId = parseInt(values.techsId);
                    tech.resumeId = resume.id;
                    resumeTechService.add(tech);
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
                      <div className="form-group mt-4 ">
                        <label htmlFor="techsId">Seviye</label>
                        <select
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.techsId}
                          className="form-control"
                          id="techsId"
                          type="text"
                        >
                          <option value="">Teknoloji Seçiniz</option>
                          {techs.map((tech) => (
                            <option key={tech.id} value={tech.id}>
                              {tech.techName}
                            </option>
                          ))}
                        </select>
                        <small id="emailHelp" className="form-text text-danger">
                          {errors.techsId && touched.techsId && errors.techsId}
                        </small>
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
