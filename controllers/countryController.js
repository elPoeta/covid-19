const axios = require('axios');
const { API_URL } = require('../config/keys');

module.exports = {
  getCountries: async (req, res) => {
    const { data } = await axios.get(`${API_URL}/countries`).catch(err =>{ return res.status(404).json({ message:"Error, try again!", err }) });
    if(!data) {
      return;
    }
    
    res.status(200).json({ allCountries: data });
    }
}