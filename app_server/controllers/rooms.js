const fs = require('fs');
const roomInfo = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const rooms = (req, res) => {
    pageTitle = "Travlr Getaways - Rooms";
    res.render('rooms', { title: pageTitle, roomInfo });

}

module.exports = {
    rooms
}