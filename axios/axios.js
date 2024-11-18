const axios = require('axios');
require("dotenv").config();

const axiosInstance = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
});
module.exports = axiosInstance;