import React, { useEffect, useState } from "react";
import "./ResumeOnSoz.css";
import { Formik } from "formik";

export default function ResumeOnSoz({ updateResume, resume }) {
  const [openInput, setOpenInput] = useState(false);
  const openInputHandler = () => {
    setOpenInput(true);
  };

  return (
    <div>
      <div class="card">
        <div class="card-header font-1 d-flex align-items-center justify-content-between">
          <h3 className="resume_onsoz_header text-main">Ön Söz</h3>
          <button
            onClick={openInputHandler}
            className="resume_onsoz_header_button"
          >
            <i class="fas fa-edit"></i>
          </button>
        </div>
        <div class="card-body">
          {openInput ? (
            <div>
              <Formik
                initialValues={{
                  onSoz: resume.description,
                }}
                validate={(values) => {
                  const errors = {};
                  if (values.onSoz.length >= 200) {
                    errors.onSoz = "Maximum 300 Karakter Girebilirsiniz";
                  }
                  return errors;
                }}
                onSubmit={(values) => {
                  let refResume = resume;
                  refResume.description = values.onSoz;
                  updateResume(refResume);
                  setOpenInput(false);
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
                }) => (
                  <form onSubmit={handleSubmit} className=" text-start">
                    <div className="form-group mt-4">
                      <label htmlFor="onSoz">Ön Söz</label>
                      <textarea
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.onSoz}
                        className="form-control"
                        id="onSoz"
                        type="text"
                      />
                      <small id="emailHelp" className="form-text text-danger">
                        {errors.onSoz && touched.onSoz && errors.onSoz}
                      </small>
                    </div>
                    <button
                      type="submit"
                      className="btn bg-main text-white mt-3"
                      disabled={isSubmitting}
                    >
                      Kaydet
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          ) : (
            <p class="card-text">{resume.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
