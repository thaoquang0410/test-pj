import axios from 'axios'

const request =  axios.create({
  baseURL: `https://65dc9cc7e7edadead7ec89e4.mockapi.io/`,
  headers: {
    'Content-Type': 'application/json'
  }
})

request.interceptors.request.use(
  config => {
    // Add authentication token or modify config
    return config;
  },
  error => {
    // Handle request error
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    // Modify response data or do something with response
    return response;
  },
  error => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default request;