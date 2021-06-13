import axios from "axios";

export default class UserService {
  getAll() {
    return axios.get("http://localhost:8080/api/users/getall");
  }
}
