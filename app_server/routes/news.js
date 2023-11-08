var express = require('express');
var router = express.Router();
const newsRouter = require('../controllers/news');

/* GET about listing. */
router.get('/', newsRouter.news);

module.exports = router;
