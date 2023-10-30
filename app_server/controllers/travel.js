const travel = (req, res) => {
    pageTitle = "Travlr Getaways";
    res.render('travel', { title: pageTitle });

}

module.exports = {
    travel
}