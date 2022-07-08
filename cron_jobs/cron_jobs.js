const cron = require('node-cron');
const request = require('request');
const constConfig = require('../config');


module.exports.zagrebCron = async () => {
    cron.schedule('*/15 * * * * *', function () {
        // EXAMPLE CALL FOR NOW
        // TODO: Make an iteration of some sort with this cron to go trough all possible API requests
        console.log('CRON SUCCESSFULLY TRIGGERED');
        request(constConfig.ZAGREB_LOCATION_URL, { headers: {'User-Agent': constConfig.HEADERS } }, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred and handle it
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log(body);
        });
    });
};


