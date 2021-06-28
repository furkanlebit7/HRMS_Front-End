import React from "react";
import "./UserProfileEdit.css";
import CandidateService from "../services/candidateService";
import { Formik } from "formik";

export default function UserProfileEdit({ authUser, setShowAlert }) {
  let candidateService = new CandidateService();

  return (
    <div>
      <div className="mb-3">
        <p>
          <button
            class="btn profile_collapse_button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample1"
            aria-expanded="false"
            aria-controls="collapseExample1"
          >
            Profili Düzenle
          </button>
        </p>
        <div class="collapse" id="collapseExample1">
          <div class="card card-body">
            <Formik
              initialValues={{
                email: authUser.email,
                firstName: authUser.firstName,
                lastName: authUser.lastName,
                birthDate: authUser.birthDate,
              }}
              validate={(values) => {
                const errors = {};
                let today = new Date();
                let date = new Date(values.birthDate);
                if (!values.email) {
                  errors.email = "Email Alanı Zorunludur";
                } else if (!values.firstName) {
                  errors.firstName = "İsim Alanı Zorunludur";
                } else if (!values.lastName) {
                  errors.lastName = "Soyisim Alanı Zorunludur";
                } else if (!values.birthDate) {
                  errors.birthDate = "Doğum Tarihi Alanı Zorunludur";
                } else if (date.getTime() >= today.getTime()) {
                  errors.birthDate = "Gelecekten mi Geliyon Bilader ?";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                let candidate = authUser;
                candidate.email = values.email;
                candidate.firstName = values.firstName;
                candidate.lastName = values.lastName;
                candidate.birthDate = values.birthDate;
                candidateService.updateCandidate(candidate);
                setShowAlert(true);
                setTimeout(() => {
                  setShowAlert(false);
                }, 2000);
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
              }) => (
                <form onSubmit={handleSubmit} className=" text-start">
                  <div className="form-group mt-2">
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="form-control"
                      id="email"
                      type="email"
                    />
                    <small id="emailHelp" className="form-text text-danger">
                      {errors.email && touched.email && errors.email}
                    </small>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="firstName">İsim</label>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      className="form-control"
                      id="firstName"
                      type="text"
                    />
                    <small id="emailHelp" className="form-text text-danger">
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}
                    </small>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="lastName">Soyisim</label>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      className="form-control"
                      id="lastName"
                      type="text"
                    />
                    <small id="emailHelp" className="form-text text-danger">
                      {errors.lastName && touched.lastName && errors.lastName}
                    </small>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="birthDate">Doğum Tarihi</label>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.birthDate}
                      className="form-control"
                      id="birthDate"
                      type="date"
                    />
                    <small id="emailHelp" className="form-text text-danger">
                      {errors.birthDate &&
                        touched.birthDate &&
                        errors.birthDate}
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
        </div>
      </div>
    </div>
  );
}
