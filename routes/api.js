const express = require('express');
const router = express.Router();
const { getStats, getCountries } = require('../controllers/generalStats');

router.get('/stats', getStats);
router.get('/countries', getCountries);

module.exports = router;