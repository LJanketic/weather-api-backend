/**
 * IMPORTS
 *
 */

const express = require('express');
const morgan = require('morgan');
const cronMethods = require('./cron_jobs/cron_jobs');
const app = express();

/**
 * MIDDLEWARE
 *
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

/**
 * CRON METHODS
 *
 */

cronMethods.zagrebCron();

app.listen(3000, () => console.log('Listening on port 3000...'));
