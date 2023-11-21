const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');

// Trips
router
    .route('/trips')
    .get(ctrlTrips.tripsList)

// Single Trip
router
    .route('/trips/:tripCode')
    .get(ctrlTrips.tripsFindCode)

module.exports = router;