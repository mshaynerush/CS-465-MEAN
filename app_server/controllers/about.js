const about = (req, res) => {
    pageTitle = "About Travlr Getaways";
    res.render('about', { title: pageTitle });

}

module.exports = {
    about
}