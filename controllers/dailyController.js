const axios = require('axios');
const { API_URL } = require('../config/keys');

module.exports = {
  getDailySummary: async (req, res) => {
    const { data } = await axios.get(`${API_URL}/daily`).catch(error =>{ return res.status(404).json({ message:"Error, try again!", error }) });
    if(!data) {
      return;
    }
    
    res.status(200).json({ dailySummary: data });
  },
  getdailyTimeSeries: async (req, res) => {
    const dateString = req.params.dateString;
    const { data } = await axios.get(`${API_URL}/daily/${dateString}`).catch(error =>{ return res.status(404).json({ message:"Error, try again!", error }) });
    if(!data) {
      return;
    }
    
    res.status(200).json({ dailyTimeSeries: data });
  }
}