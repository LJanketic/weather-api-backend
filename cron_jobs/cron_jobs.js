const { response } = require('express');
const cron = require('node-cron');
const request = require('request');
const constConfig = require('../config');


module.exports.cityCron = async () => {
    cron.schedule('*/15 * * * * *', function () {
        // EXAMPLE CALL FOR NOW
        constConfig.LOCATION_URLS.forEach((el) => {
            console.log('CRON SUCCESSFULLY TRIGGERED');
            request(el, { headers: { 'User-Agent': constConfig.HEADERS } }, function (error, response, body) {
                if (response && response.statusCode && response.statusCode === 200) {
                    console.log('Request code:', response && response.statusCode);
                    console.log('REQUEST SUCCESSFUL:', body);
                }
                console.log('error:', error); // Print the error if one occurred and handle it
                // Print the response status code if a response was received
                console.log(body);
            });
        });
    });
};


// constConfig.LOCATION_URLS.forEach((el) => {
//     const Request = new Request(el, { headers: constConfig.HEADERS })
//     fetch(request)
//     .then(response => {
//         if(response.status === 200){
//             console.log(response.json());
//         } else {
//             throw new Error('Something went wrong on the API server!');
//         }
//     })
//     .catch(error => {
//         console.error(error);
//     })
// });

// EXAMPLE CALL FOR NOW
// constConfig.LOCATION_URLS.forEach((el) => {
//     console.log('CRON SUCCESSFULLY TRIGGERED');
//     request(el, { headers: { 'User-Agent': constConfig.HEADERS } }, function (error, response, body) {
//         if(response && response.statusCode && response.statusCode === 200){
//             console.log('Request code:', response && response.statusCode);
//             console.log('REQUEST SUCCESSFUL:', body);
//         }
//         console.log('error:', error); // Print the error if one occurred and handle it
//          // Print the response status code if a response was received
//         console.log(body);
//     });
// });
