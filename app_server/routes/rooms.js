const express = require('express');
const router = express.Router();
const roomsRouter = require('../controllers/rooms');

/* GET about listing. */
router.get('/', roomsRouter.rooms);

module.exports = router;
