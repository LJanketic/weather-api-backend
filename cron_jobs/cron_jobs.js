const cron = require('node-cron');
const request = require('request');
const constConfig = require('../config');

// const options = {
//     url: constConfig.locationURLs.zagreb,
//     headers: {
//         'User-Agent': constConfig.headers
//     }
// };

module.exports.zagrebCron = async () => {
    cron.schedule('*/15 * * * * *', function () {
        // API call goes here
        console.log('CRON SUCCESSFULLY TRIGGERED');
        request(constConfig.ZAGREB_LOCATION_URL, { headers: {'User-Agent': constConfig.HEADERS } }, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred and handle it
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log(body);
        });
    });
};


