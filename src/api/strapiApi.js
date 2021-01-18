import axios from "axios";

export default "axios";

const instance = axios.create({
  baseURL: "http://localhost:1337",
});

export default instance;
