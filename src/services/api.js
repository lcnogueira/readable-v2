import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

axios.defaults.headers.common.Authorization = 'ANY_TOKEN';

export default api;
