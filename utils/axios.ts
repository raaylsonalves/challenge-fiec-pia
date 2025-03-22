import axios from 'axios';

export default axios.create({
    baseURL: import.meta.env.VITE_API_BASE,
    timeout: 3 * 1000,
});