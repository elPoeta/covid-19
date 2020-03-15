const express = require('express');
const router = express.Router();
const { getStats } = require('../controllers/generalStats');
const { getCountries, getCountry } = require('../controllers/countryController');

router.get('/stats', getStats);
router.get('/countries', getCountries);
router.get('/countries/:country', getCountry);

module.exports = router;