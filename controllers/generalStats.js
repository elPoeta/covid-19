const axios = require('axios');
const { API_URL } = require('../config/keys');

module.exports = {
  getStats: async (req, res) => {
  const { data } = await axios.get(API_URL).catch(err =>{ return res.status(404).json({ message:"Error, try again!", err }) });
  if(!data) {
    return;
  }
  const { confirmed, recovered, deaths, image } = data;
  const stats = {
    confirmed: confirmed.value,
    recovered: recovered.value,
    deaths: deaths.value,
    image
  }
  res.status(200).json({ stats });
  },

  getCountries: async (req, res) => {
    const { data } = await axios.get(`${API_URL}/countries`).catch(err =>{ return res.status(404).json({ message:"Error, try again!", err }) });
    if(!data) {
      return;
    }
    
    res.status(200).json({ allCountries: data });
    }
}