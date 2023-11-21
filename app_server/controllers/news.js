const news = (req, res) => {
    pageTitle = "News Travlr Getaways";
    res.render('news', { title: pageTitle });

}

module.exports = {
    news
}