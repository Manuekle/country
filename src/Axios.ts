import axios from "axios";
export default (ruta = "") => {
  let rutaApi = "";
  if (ruta == "1") {
    rutaApi = "https://restcountries.com/v2/";
  } else {
    rutaApi = "https://restcountries.com/v2/";
  }

  return axios.create({
    baseURL: rutaApi,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
