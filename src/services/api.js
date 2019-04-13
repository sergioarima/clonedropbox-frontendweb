import axios from "axios";

const api = axios.create({
    baseURL: 'https://clonedropbox-backend.herokuapp.com',
});

export default api;