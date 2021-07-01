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
  removeById(id) {
    return axios.get(
      "http://localhost:8080/api/resumeExperience/removeById?id=" + id
    );
  }
  add(experience) {
    return axios.post(
      "http://localhost:8080/api/resumeExperience/add",
      experience
    );
  }
}
