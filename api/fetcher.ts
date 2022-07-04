import axios from "axios";
import aspida from "@aspida/axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    HOGE: "hogehoge"
  }
});
// TODO リトライはReactQueryで実施可能、intercepterはここに定義

const fetcher = aspida(axiosInstance);
export { fetcher };
