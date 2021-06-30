import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResumeOnSoz from "../components/ResumeOnSoz";
import ResumeSchools from "../components/ResumeSchools";
import ResumeService from "../services/resumeService";

export default function UserResume() {
  const { authUser } = useSelector((state) => state.auth);
  const [resume, setResume] = useState({});

  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService
      .getResumeByCandidateId(authUser.id)
      .then((result) => setResume(result.data.data[0]));
  }, []);

  const updateResume = () => {
    let resumeService = new ResumeService();
    resumeService.updateResume(resume);
  };

  return (
    <div className="d-flex flex-column text-align-left">
      <ResumeOnSoz
        updateResume={updateResume}
        resume={resume}
        authUser={authUser}
      />
      <ResumeSchools resume={resume} />
    </div>
  );
}
