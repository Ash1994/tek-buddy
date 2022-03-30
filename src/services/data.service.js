import http from "../http-common";
class DataService {
  getAllProfiles() {
    return http.get("/findAllProfiles");
  }

  getAllTopProfiles() {
    return http.get("/findAllTopProfiles");
  }

  getProfilesBySkill(skill) {
    return http.get(`/findProfilesBySkill/${skill}`);
  }

  saveQuesAns(data) {
    return http.post("/addQueAns", data);
  }

  getAllQuesAns() {
    return http.get("/findAllQueAns");
  }

  //   get(id) {
  //     return http.get(`/tutorials/${id}`);
  //   }
  //   create(data) {
  //     return http.post("/tutorials", data);
  //   }
  //   update(id, data) {
  //     return http.put(`/tutorials/${id}`, data);
  //   }
  //   delete(id) {
  //     return http.delete(`/tutorials/${id}`);
  //   }
  //   deleteAll() {
  //     return http.delete(`/tutorials`);
  //   }
  //   findByTitle(title) {
  //     return http.get(`/tutorials?title=${title}`);
  //   }
}
export default new DataService();
