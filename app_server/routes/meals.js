var express = require('express');
var router = express.Router();
const mealsRouter = require('../controllers/meals');

/* GET Meals listing. */
router.get('/', mealsRouter.meals);

module.exports = router;
