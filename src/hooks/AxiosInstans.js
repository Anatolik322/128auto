import axios from 'axios';
console.log(process.env.REACT_APP_API_URL);

const api = axios.create({
    baseURL: 'https://128autoapi.vercel.app',
});

export default api;
