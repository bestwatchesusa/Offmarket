import axios from "axios";

const Request = axios.create({
    baseURL: 'http://localhost:8000/api/',
    // baseURL: 'https://bestusawatches.pythonanywhere.com/api/',
    //baseURL: 'https://server.bestassistantusa.com/api/',
    //baseURL: 'https://best-virtual-assistance-api.vercel.app/api',
    withCredentials: true
});

export default Request;
