const axios = require("axios");

const api = axios.create({
  baseURL: "localhost",
  timeout: 30000,
});

module.exports = api;
