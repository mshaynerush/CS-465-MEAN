const express = require('express');
const router = express.Router();
const authController = require('../controllers/authentication');
const ctrlTrips = require('../controllers/trips');
const { expressjwt: jwt } = require('express-jwt');

const auth = jwt({
    secret: process.env.JWT_SECRET,
    requestProperty: 'payload',
    algorithms: ["HS256"]
})



// Trips
router
    .route('/trips')
    .get(ctrlTrips.tripsList)
    .post(auth, ctrlTrips.tripsAddTrip);

// Single Trip
router
    .route('/trips/:tripCode')
    .get(ctrlTrips.tripsFindCode)
    .put(auth, ctrlTrips.tripsUpdateTrip)
    .delete(auth, ctrlTrips.tripsDeleteTrip)

router
    .route('/login')
    .post(authController.login)

    router
    .route('/register')
    .post(authController.register)

module.exports = router;