const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.node_package_name + ' - Travel';
    console.info('>>>> ' + process.env.npm_package_author);
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No trips exist in database";
        }
    }


    res.render('travel', {
        title: pageTitle,
        trips: responseBody,
        message
    });
};



// Get list of trips

const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };


    console.info('>> travelControll.travleList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    )
}



module.exports = {
    travelList
}