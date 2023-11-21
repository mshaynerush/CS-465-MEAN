const express = require('express');
const router = express.Router();
const contactRouter = require('../controllers/contact');

/* GET travel page. */
router.get('/', contactRouter.contact);

module.exports = router;