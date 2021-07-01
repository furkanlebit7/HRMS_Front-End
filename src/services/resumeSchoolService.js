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
  add(school) {
    return axios.post("http://localhost:8080/api/resumeSchool/add", school);
  }
  removeById(id) {
    return axios.get(
      "http://localhost:8080/api/resumeSchool/removeById?id=" + id
    );
  }
}
