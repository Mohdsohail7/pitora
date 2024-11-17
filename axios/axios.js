const axios = require('axios');
require("dotenv").config();

const axiosInstance = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
        UNSPLASH_SECRET_KEY: process.env.UNSPLASH_SECRET_KEY
    },
});
module.exports = axiosInstance;