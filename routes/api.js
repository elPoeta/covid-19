const express = require('express');
const router = express.Router();
const { getStats } = require('../controllers/generalStats');
const { getCountries } = require('../controllers/countryController');

router.get('/stats', getStats);
router.get('/countries', getCountries);

module.exports = router;