const meals = (req, res) => {
    pageTitle = "Meals Travlr Getaways";
    res.render('meals', { title: pageTitle });

}

module.exports = {
    meals
}