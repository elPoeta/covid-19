const axios = require('axios');
const { API_URL } = require('../config/keys');

module.exports = {
  getStats: async (req, res) => {
  const { data } = await axios.get(API_URL)
  const { confirmed, recovered, deaths } = data;
  const stats = {
    confirmed: confirmed.value,
    recovered: recovered.value,
    deaths: deaths.value
  }
  res.status(200).json({ stats });
  }
}