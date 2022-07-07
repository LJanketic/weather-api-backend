/**
 * IMPORTS
 * 
 */

const express = require('express');
const morgan = require('morgan');
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

app.listen(3000, () => console.log('Listening on port 3000...'));