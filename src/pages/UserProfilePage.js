import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import UserProfile from "./UserProfile";
import UserResume from "./UserResume";
import UserJobPreferences from "./UserJobPreferences";

export default function UserProfilePage() {
  const { authUser } = useSelector((state) => state.auth);
  let history = useHistory();
  return (
    <div className=" mt-5">
      {authUser.id ? (
        <Row>
          <Col xs={6} md={4}>
            <div class="list-group">
              {authUser.id && (
                <p
                  to="./userprofile"
                  class="bg-main list-group-item list-group-item-action active"
                >
                  {authUser.firstName.charAt(0).toUpperCase() +
                    authUser.firstName.slice(1) +
                    " " +
                    authUser.lastName.charAt(0).toUpperCase() +
                    authUser.lastName.slice(1)}
                </p>
              )}

              <Link
                to="/userprofile/profile"
                class="list-group-item list-group-item-action"
              >
                Profil
              </Link>
              <Link
                to="/userprofile/userresume"
                class="list-group-item list-group-item-action"
              >
                Özgeçmişler
              </Link>
              <Link
                to="/userprofile/userjobpreferences"
                class="list-group-item list-group-item-action"
              >
                İş Tercihleri
              </Link>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <Route path="/userprofile/profile" component={UserProfile} />
            <Route path="/userprofile/userresume" component={UserResume} />
            <Route
              path="/userprofile/userjobpreferences"
              component={UserJobPreferences}
            />
          </Col>
        </Row>
      ) : (
        history.push("/signIn")
      )}
    </div>
  );
}
