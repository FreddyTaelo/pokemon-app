import axios from 'axios';
import Constants from 'expo-constants';

const apiBaseURL = Constants.expoConfig.extra.API_BASE //|| "http://ec2-13-60-74-36.eu-north-1.compute.amazonaws.com";

console.log("Axios Base URL:", apiBaseURL);

const apiClient = axios.create({
  baseURL: apiBaseURL,//config.API_BASE,
  timeout: 5000,  
});

console.log("Axios Client Config:", apiClient.defaults.baseURL);

apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
