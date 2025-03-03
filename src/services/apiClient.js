import axios from 'axios';
import config from '../config';

const apiClient = axios.create({
  baseURL: config.API_BASE,
  timeout: 5000,  // Timeout after 5 seconds
});

// Interceptor for handling responses
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
