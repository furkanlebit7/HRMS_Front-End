import axios from "axios";

export default class ResumeLanguageService {
  getAll() {
    return axios.get("http://localhost:8080/api/resumeLanguage/getAll");
  }
  getByResumeId(id) {
    return axios.get(
      "http://localhost:8080/api/resumeLanguage/getByResumeId?id=" + id
    );
  }
  removeById(id) {
    return axios.get(
      "http://localhost:8080/api/resumeLanguage/removeById?id=" + id
    );
  }
  add(language) {
    return axios.post("http://localhost:8080/api/resumeLanguage/add", language);
  }
}
