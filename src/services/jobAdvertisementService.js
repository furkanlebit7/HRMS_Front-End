import axios from "axios";

export default class JobAdvertisementService {
  getAll() {
    return axios.get("http://localhost:8080/api/jobAdvertisements/getAll");
  }
  getAllActive() {
    return axios.get(
      "http://localhost:8080/api/jobAdvertisements/getAllActive"
    );
  }
  getAllActiveSorted() {
    return axios.get(
      "http://localhost:8080/api/jobAdvertisements/getAllActiveSorted"
    );
  }
  getEmployerAdvertisement(id) {
    return axios.get(
      "http://localhost:8080/api/jobAdvertisements/getEmployerAdvertisement?employerId=" +
        id
    );
  }
  add(advertisement) {
    return axios.post(
      "http://localhost:8080/api/jobAdvertisements/add",
      advertisement
    );
  }

  getFourAdvertisement() {
    return axios.get(
      "http://localhost:8080/api/jobAdvertisements/getFourAdvertisement"
    );
  }
}
