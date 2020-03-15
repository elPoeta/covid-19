const express = require('express');
const router = express.Router();
const { getStats } = require('../controllers/generalStats');
const { getCountries, getCountry, getCountryDetail } = require('../controllers/countryController');
const { getDailySummary, getdailyTimeSeries } = require('../controllers/dailyController');

router.get('/stats', getStats);
router.get('/countries', getCountries);
router.get('/countries/:country', getCountry);
router.get('/countries/:country/:typeDetail', getCountryDetail);
router.get('/daily', getDailySummary);
router.get('/daily/:dateString', getdailyTimeSeries);

module.exports = router;