import axios from 'axios';

function axiosSettings() {
  /** default headers */
  axios.defaults.headers['Content-Type'] = 'application/json';
  axios.defaults.headers.Accept = 'application/json';
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = '/';

  /** response settings */
  axios.interceptors.response.use(
    response => response.data,
    error => {
      if (axios.isCancel(error)) {
        return Promise.reject(error);
      }

      switch (error.response.status) {
        case 401:
          return Promise.reject(error);

        case 400: {
          const formErrors = {};
          return Promise.reject({ // eslint-disable-line
            ...error,
            formErrors,
          });
        }

        case 404:
          return Promise.reject(error);

        case 500:
          return Promise.reject(error);

        default:
          return Promise.reject(error);
      }
    },
  );
}

export default axiosSettings;
