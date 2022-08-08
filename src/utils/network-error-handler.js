import axios from 'api/api';
import { toast } from 'react-toastify';

/**
 * @desc: Network error handler using axios network req/res interceptors
 */

const apiInterceptors = () => {
  // Add a request interceptor
  axios.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      return config;
    },
    (error) => {
      // Do something with request error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error('Error: No response received');
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error('Network error while setting up the request');
      }
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    (response) => {
      // Do something with response data
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
};

export default apiInterceptors;
