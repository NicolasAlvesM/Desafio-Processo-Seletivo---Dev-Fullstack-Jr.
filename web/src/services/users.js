import api from "./api";

export const userService = {
  getUsers(limit){
    return api.get("/",{
      params:{
        limit
      }
    });
  }
}