import axios from "axios";

const options = (method, url, data, params) => ({
  method,
  url,
  data,
  params,
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
    "Content-Type": "application/json",
  },
});

export const axiosRequest = ({ method, url, data, params }) => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  return axios.request(options(method, url, data, params));
};
