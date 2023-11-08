const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const travel = (req, res) => {
    pageTitle = "Travlr Getaways";
    res.render('travel', { title: pageTitle, trips });

}

module.exports = {
    travel
}