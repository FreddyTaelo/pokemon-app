import axios from 'axios';
import config from '../config';

//const apiBaseURL = process.env.API_BASE;

const apiClient = axios.create({
  baseURL: process.env.API_BASE,//config.API_BASE,
  timeout: 5000,  
});


apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
