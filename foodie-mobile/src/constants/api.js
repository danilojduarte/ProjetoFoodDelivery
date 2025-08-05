import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.0.7:3001",
    timeout: 10000
});

export default api;