import axios from 'axios';
import config from 'utils/config';

const { API_URL } = config;

const callApi = axios.create({
  baseURL: API_URL,
});

export default callApi;
