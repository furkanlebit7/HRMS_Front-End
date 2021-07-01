import axios from "axios";

export default class ResumeTechService {
  getAll() {
    return axios.get("http://localhost:8080/api/resumeTech/getAll");
  }
  add(tech) {
    return axios.post("http://localhost:8080/api/resumeTech/add", tech);
  }
  getByResumeId(id) {
    return axios.get(
      "http://localhost:8080/api/resumeTech/getByResumeId?id=" + id
    );
  }
  removeById(id) {
    return axios.get(
      "http://localhost:8080/api/resumeTech/removeById?id=" + id
    );
  }
}
