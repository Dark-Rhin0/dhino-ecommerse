import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://be-dhino-ecommerse-1.onrender.com/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClient;