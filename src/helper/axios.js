import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/user/`,
});

export default axiosInstance;
