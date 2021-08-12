import axios from 'axios';

export const backendUrl: string = 'https://luong-auth-app.herokuapp.com';

const axiosClient = () =>
  axios.create({
    baseURL: `${backendUrl}/api`,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
    },
  });

export default axiosClient;
