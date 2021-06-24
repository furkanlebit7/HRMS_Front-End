import React from "react";
import "./SignUp.css";
import signUpVideo from "../images/signUpVideo.mp4";
import SignNavBar from "../layouts/Navbar/SignNavBar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormLabel } from "react-bootstrap";

export default function SignUp() {
  const initialValues = { email: "", password: "" };
  const schema = Yup.object({
    email: Yup.string().email().required("email zorunlu alandır"),
    password: Yup.string().required("password zorunlu alan"),
  });

  return (
    <div className="signup_container">
      <SignNavBar text="Giriş Yap" link="./signIn" />
      <div className="signup_body">
        <video autoplay muted loop autoPlay className="myVideo">
          <source src={signUpVideo} type="video/mp4" />
        </video>
        <div className="signUp_box border-std p-std">
          <h3 className="signUp_box_title mb-5">Hayatınıza Uygun İş Bulun</h3>

          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <div className="form-group">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                ></Field>
                <ErrorMessage
                  name="email"
                  render={(error) => (
                    <small class="form-text signUp_box_title_error">
                      *{error}
                    </small>
                  )}
                ></ErrorMessage>
              </div>
              <div className="form-group mt-2">
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                ></Field>
                <ErrorMessage
                  name="password"
                  render={(error) => (
                    <small class="form-text signUp_box_title_error">
                      {error}
                    </small>
                  )}
                ></ErrorMessage>
              </div>
              <button
                type="submit"
                className="signIn_button_submit btn btn-primary"
              >
                Kayıt Ol
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
