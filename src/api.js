import axios from "axios";

const API = axios.create({
  baseURL: window.location.origin,
  withCredentials: true,
});

export default API;
