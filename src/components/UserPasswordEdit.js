import React from "react";
import "./UserPasswordEdit.css";
import CandidateService from "../services/candidateService";
import { Formik } from "formik";

export default function UserPasswordEdit({ authUser, setShowAlert2 }) {
  let candidateService = new CandidateService();
  return (
    <div>
      <div className="mb-3">
        <p>
          <button
            class="btn profile_collapse_button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample2"
          >
            Şifre Değiştir
          </button>
        </p>
        <div class="collapse" id="collapseExample2">
          <div class="card card-body">
            <Formik
              initialValues={{
                oldPassword: "",
                password: "",
                rePassword: "",
              }}
              validate={(values) => {
                const errors = {};
                if (values.oldPassword != authUser.password) {
                  errors.oldPassword = "Eski Parolanız Yanlış";
                } else if (!values.oldPassword) {
                  errors.oldPassword = "Eski Parolanız Boş Olamaz";
                } else if (values.password.length < 6) {
                  errors.password = "Parola 6 Haneden Kısa Olamaz";
                } else if (values.password.length > 16) {
                  errors.password = "Parola 16 Haneden Uzun Olamaz";
                } else if (values.password != values.rePassword) {
                  errors.rePassword = "Parolalar uyuşmuyor";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                let candidate = authUser;
                candidate.password = values.password;
                candidateService.updateCandidate(candidate);
                setShowAlert2(true);
                setTimeout(() => {
                  setShowAlert2(false);
                }, 2000);
                setSubmitting(false);
                resetForm();
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
                    <label htmlFor="oldPassword">Eski Şifre</label>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.oldPassword}
                      className="form-control"
                      id="oldPassword"
                      type="password"
                    />
                    <small id="emailHelp" className="form-text text-danger">
                      {errors.oldPassword &&
                        touched.oldPassword &&
                        errors.oldPassword}
                    </small>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="password">Yeni Şifre</label>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="form-control"
                      id="password"
                      type="password"
                    />
                    <small id="emailHelp" className="form-text text-danger">
                      {errors.password && touched.password && errors.password}
                    </small>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="rePassword">Şifre Tekrar</label>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.rePassword}
                      className="form-control"
                      id="rePassword"
                      type="password"
                    />
                    <small id="emailHelp" className="form-text text-danger">
                      {errors.rePassword &&
                        touched.rePassword &&
                        errors.rePassword}
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
