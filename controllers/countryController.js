const axios = require('axios');
const { API_URL } = require('../config/keys');

module.exports = {
  getCountries: async (req, res) => {
    const { data } = await axios.get(`${API_URL}/countries`).catch(error =>{ return res.status(404).json({ message:"Error, try again!", error }) });
    if(!data) {
      return;
    }
    
    res.status(200).json({ allCountries: data });
    },
  getCountry: async (req, res) => {
    const country = req.params.country;
    const { data } = await axios.get(`${API_URL}/countries/${country}`).catch(error =>{ return res.status(404).json({ message:"Error, try again!", error }) });
    if(!data) {
      return;
    }
    
    res.status(200).json({ country: data });
    },
    
  getCountryDetail: async (req, res) => {
    const country = req.params.country;
    const typeDetail = req.params.typeDetail.toLowerCase();
    const { data } = await axios.get(`${API_URL}/countries/${country}/${typeDetail}`).catch(error =>{ return res.status(404).json({ message:"Error, try again!", error }) });
    if(!data) {
      return;
    }
    
    res.status(200).json({ countryDetail: data });
    }

}