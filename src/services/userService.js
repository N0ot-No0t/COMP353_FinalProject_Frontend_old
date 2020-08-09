import http from "../http-common";

class UserDataService {
  
  getAll() {
    return http.get("/user");
  }

  create(data) {
    return http.post("/register", data);
  }

  get(id) {
    return http.get(`/user/${id}`);
  }

  update(id, data) {
    return http.put(`/user/${id}`, data);
  }

  delete(id) {
    return http.delete(`/user/${id}`);
  }

  deleteAll() {
    return http.delete(`/user`);
  }

  findByName(firstName) {
    return http.get(`/user?firstName=${firstName}`);
  }

}

export default new UserDataService();