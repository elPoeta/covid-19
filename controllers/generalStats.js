const axios = require('axios');
const { API_URL } = require('../config/keys');

module.exports = {
  getStats: async (req, res) => {
  const { data } = await axios.get(API_URL).catch(error =>{ return res.status(404).json({ message:"Error, try again!", error }) });
  if(!data) {
    return;
  }
  const { confirmed, recovered, deaths, image, lastUpdate } = data;
  const stats = {
    confirmed: confirmed.value,
    recovered: recovered.value,
    deaths: deaths.value,
    image,
    lastUpdate
  }
  res.status(200).json({ stats });
  }
}