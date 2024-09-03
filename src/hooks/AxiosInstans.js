import axios from 'axios';

const api = axios.create({
    baseURL: process.env.MONGO_URI,
});

export default api;
