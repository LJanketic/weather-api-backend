/**
 * IMPORTS
 * 
 */

const express = require('express');
const morgan = require('morgan');
const cron = require('node-cron');
const request = require('request');
const app = express();

/**
 * MIDDLEWARE
 * 
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.use(morgan('tiny'));

/**
 * ROUTE IMPORTS
 * 
 */

const indexRouter = require('./routes/index');

/**
 * ROUTE IMPORTS
 * 
 */

app.use('/weather', indexRouter);

/**
 * TEST
 * 
 */

const options = {
    url: 'https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=45.8150&lon=15.9819',
    headers: {
        'User-Agent': 'request'
    }
};

cron.schedule("*/15 * * * * *", function () {
    // API call goes here
    console.log("running a task every minute");
    request(options, function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred and handle it
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          console.log(body)
    });
})

app.listen(3000, () => console.log('Listening on port 3000...'));