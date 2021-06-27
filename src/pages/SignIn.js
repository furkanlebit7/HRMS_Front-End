import React, { useState } from "react";
import "./SignUp.css";
import signUpVideo from "../images/signUpVideo.mp4";
import SignNavBar from "../layouts/Navbar/SignNavBar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import UserService from "../services/userService";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { logIn } from "../store/actions/authActions";

export default function SignUp() {
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  let history = useHistory();

  const signInHandler = (values) => {
    let userService = new UserService();
    userService
      .getUserByEmail(values.email)
      .then((result) => setUser(result.data.data));
    if (user.password != values.password) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setError(false);
      dispatch(logIn(user));
      history.push("/");
    }
  };

  const initialValues = { email: "", password: "" };
  const schema = Yup.object({
    email: Yup.string().email().required("email zorunlu alandır"),
    password: Yup.string().required("password zorunlu alan"),
  });

  return (
    <div className="signup_container">
      <SignNavBar text="Kayıt Ol" link="./signUp" />
      <div className="signup_body">
        <video autoplay muted loop autoPlay className="myVideo">
          <source src={signUpVideo} type="video/mp4" />
        </video>
        <div className="signUp_box border-std p-std">
          <h3 className="signUp_box_title mb-5">Hayatınıza Uygun İş Bulun</h3>
          {error && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              Hatalı kullanıcı adı veya parola
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => {
                  setError(false);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              signInHandler(values);
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
                    <small className="form-text signUp_box_title_error">
                      * {error} *
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
                    <small className="form-text signUp_box_title_error">
                      * {error} *
                    </small>
                  )}
                ></ErrorMessage>
              </div>
              <button
                type="submit"
                className="signIn_button_submit btn btn-primary"
              >
                Giriş Yap
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
