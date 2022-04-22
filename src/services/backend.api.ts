import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-pdi.herokuapp.com/api/',
});

export default api;