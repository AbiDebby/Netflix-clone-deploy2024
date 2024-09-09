import axios from "axios";
// used to fetch
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// instance.get("/movie/top_rated");

export default instance;
