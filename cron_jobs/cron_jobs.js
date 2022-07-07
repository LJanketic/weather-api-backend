const cron = require('node-cron');
const request = require('request');

const options = {
    url: 'https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=45.8150&lon=15.9819',
    headers: {
        'User-Agent': 'request'
    }
};

cron.schedule('*/15 * * * * *', function () {
    // API call goes here
    console.log('CRON SUCCESSFULLY TRIGGERED');
    request(options, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred and handle it
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log(body);
    });
});
