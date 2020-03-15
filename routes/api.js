const express = require('express');
const router = express.Router();
const { getStats } = require('../controllers/generalStats');

router.get('/stats', getStats);

module.exports = router;