const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const travel = (req, res) => {
    pageTitle = "Travlr Getaways - Rooms";
    res.render('travel', { title: pageTitle, trips });

}

module.exports = {
    travel
}