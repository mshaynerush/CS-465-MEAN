const contact = (req, res) => {
    pageTitle = "Contact - Travlr Getaways";
    res.render('contact', { title: pageTitle });

}

module.exports = {
    contact
}