import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResumeOnSoz from "../components/ResumeOnSoz";
import ResumeSchools from "../components/ResumeSchools";
import ResumeExperiences from "../components/ResumeExperiences";
import ResumeLanguages from "../components/ResumeLanguages";
import ResumeService from "../services/resumeService";
import ResumeTech from "../components/ResumeTech";

export default function UserResume() {
  const { authUser } = useSelector((state) => state.auth);
  const [resume, setResume] = useState({});
  const [trigger, setTrigger] = useState(true);

  let resumeService = new ResumeService();

  useEffect(() => {
    resumeService
      .getResumeByCandidateId(authUser.id)
      .then((result) => setResume(result.data.data[0]));
  }, [trigger]);

  function triggerResume() {
    trigger ? setTrigger(false) : setTrigger(true);
  }

  const updateResume = (ref) => {
    let resumeService = new ResumeService();
    resumeService.updateResume(ref);
  };

  return (
    <div className="d-flex flex-column text-align-left">
      <ResumeOnSoz
        updateResume={updateResume}
        resume={resume}
        authUser={authUser}
      />
      <ResumeSchools resume={resume} triggerResume={triggerResume} />
      <ResumeExperiences triggerResume={triggerResume} resume={resume} />
      <ResumeLanguages resume={resume} triggerResume={triggerResume} />
      <ResumeTech resume={resume} triggerResume={triggerResume} />
    </div>
  );
}
