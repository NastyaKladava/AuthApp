import axios from "axios";

export default axios.create({
  //baseURL: "https://authapp-server-production.up.railway.app",
  baseURL: "http://localhost:3001",
  headers: {
    "Content-type": "application/json",
  },
});
