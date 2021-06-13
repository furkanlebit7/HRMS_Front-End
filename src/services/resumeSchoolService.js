import axios from "axios";

export default class ResumeSchoolService {
  getAll() {
    return axios.get("http://localhost:8080/api/resumeSchool/getAll");
  }
  getSchoolByResumeId(id) {
    return axios.get(
      "http://localhost:8080/api/resumeSchool/findByResumeId?id=" + id
    );
  }
}
