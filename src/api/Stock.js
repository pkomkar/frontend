import axios from "axios";

export default axios.create({
  baseURL: "https://backend012.azurewebsites.net/stocks",
});
