import axios from "axios";

export default class ResumeService {
  getAll() {
    return axios.get("http://localhost:8080/api/resume/getAll");
  }
  getResumeByCandidateId(id) {
    return axios.get(
      "http://localhost:8080/api/resume/findByCandidateId?id=" + id
    );
  }
  updateResume(resume) {
    return axios.post("http://localhost:8080/api/resume/updateResume", resume);
  }
}
