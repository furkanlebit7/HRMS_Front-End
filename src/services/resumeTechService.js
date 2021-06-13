import axios from "axios";

export default class ResumeTechService {
  getAll() {
    return axios.get("http://localhost:8080/api/resumeTech/getAll");
  }
}
