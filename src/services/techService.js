import axios from "axios";

export default class TechService {
  getAll() {
    return axios.get("http://localhost:8080/api/techs/getAll");
  }
}
