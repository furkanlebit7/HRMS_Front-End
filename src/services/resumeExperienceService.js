import axios from "axios";

export default class ResumeExperienceService {
  getAll() {
    return axios.get("http://localhost:8080/api/resumeExperience/getAll");
  }
  getExperiencesByResumeId(id) {
    return axios.get(
      "http://localhost:8080/api/resumeExperience/getByCandidateId?id=" + id
    );
  }
}
