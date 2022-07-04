import axios from "axios";
import aspida from "@aspida/axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    HOGE: "hogehoge" // 任意のヘッダー
  }
});

// FIXME
// リクエスト時の共通処理
axiosInstance.interceptors.request.use((request) => {
  if (!request) return request;
  // 認証トークンなど（ストアなどから取得するメソッドをコール）
  if (request.headers) {
    request.headers.Authorization = `Bearer <tokennnnnnnn>`;
  }
  // TODO 削除
  window.console.info(request);

  return request;
});

// レスポンス時の共通処理
axiosInstance.interceptors.response.use(
  (response) => response, // 成功時
  (error) => {
    // 失敗時
    // セッション・トークンのリフレッシュ処理等
    window.console.error(JSON.stringify(error, null, 2));
  }
);

// aspida
const fetcher = aspida(axiosInstance);
export { fetcher };
