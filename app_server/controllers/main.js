const index = (req, res) => {
    pageTitle = process.env.npm_package_description + " - Travel";
    res.render('index', {title: 'Travlr Getaways'});
}

module.exports = {
    index
}