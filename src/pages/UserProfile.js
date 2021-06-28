import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import ResumeService from "../services/resumeService";
import UserProfileEdit from "../components/UserProfileEdit";
import UserPasswordEdit from "../components/UserPasswordEdit";

export default function UserProfile() {
  const [resume, setResume] = useState({});
  const { authUser } = useSelector((state) => state.auth);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);

  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService
      .getResumeByCandidateId(authUser.id)
      .then((result) => setResume(result.data.data[0]));
  }, []);

  return (
    <div>
      <div className="user_profile_profile d-flex flex-column align-items-center justify-content-center">
        <div clas="afaf">
          <img
            width="150px"
            style={{ borderRadius: "10px" }}
            src={authUser.photo}
          ></img>
        </div>
        <h3 className="text-main my-3">
          {authUser.firstName.charAt(0).toUpperCase() +
            authUser.firstName.slice(1) +
            " " +
            authUser.lastName.charAt(0).toUpperCase() +
            authUser.lastName.slice(1)}
        </h3>

        {resume && (
          <div>
            <h6 className="mb-4">{resume.description}</h6>
            <div className="my-3">
              <a href={resume.candidateGithub}>
                <i class="fab fa-github text-main fa-2x mr-3"></i>
              </a>
              <a href={resume.candidateLinkedin}>
                <i class="fab fa-linkedin text-main fa-2x ml-3"></i>
              </a>
            </div>
          </div>
        )}
        <p className=" font-1">{authUser.email}</p>
        <p className=" font-1 my-3">{authUser.birthDate}</p>
      </div>
      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <b>Güncelleme İşleminiz Başarılı</b>
        </Alert>
      )}
      <UserProfileEdit setShowAlert={setShowAlert} authUser={authUser} />
      {showAlert2 && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <b>Güncelleme İşleminiz Başarılı</b>
        </Alert>
      )}
      <UserPasswordEdit setShowAlert2={setShowAlert2} authUser={authUser} />
    </div>
  );
}
