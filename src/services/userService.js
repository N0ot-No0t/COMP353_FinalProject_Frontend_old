import http from "../http-common";

class UserDataService {

  create(data) {
    return http.post("/register", data);
  }

}

export default new UserDataService();