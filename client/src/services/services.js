import { LOCALSTORAGEKEYS } from "../constants/constants";
import http from "./http-common";

const register = (data) => {
  return http.post("/api/auth/register", data);
};

const logInUser = (data) => {
  return http.post("/api/auth/login", data);
};

const getAllUsers = () => {
  return http.get("/api/users", {
    headers: { accessToken: localStorage.getItem(LOCALSTORAGEKEYS.TOKEN) },
  });
};

const deleteUsers = (id) => {
  return http.delete(`/api/users/delete/${id}`, {
    headers: { accessToken: localStorage.getItem(LOCALSTORAGEKEYS.TOKEN) },
  });
};

const blockUsers = (id) => {
  return http.put(`/api/users/block/${id}`, {
    headers: { accessToken: localStorage.getItem(LOCALSTORAGEKEYS.TOKEN) },
  });
};

const unblockUsers = (id) => {
  return http.put(`/api/users/unblock/${id}`, {
    headers: { accessToken: localStorage.getItem(LOCALSTORAGEKEYS.TOKEN) },
  });
};

const Service = {
  getAllUsers,
  logInUser,
  register,
  deleteUsers,
  blockUsers,
  unblockUsers,
};

export default Service;
