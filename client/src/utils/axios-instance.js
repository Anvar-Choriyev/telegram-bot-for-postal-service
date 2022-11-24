import axios from "axios";
const token = localStorage.getItem("token");

export default axios.create({
  baseURL: "http://localhost:9090/api/v1",
  headers: {
    authorization: `Bearer ${token}`,
  },
});
