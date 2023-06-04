const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const recipesRouter = require('./routes/recipes');

const app = express();

const port = 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', recipesRouter);

app.listen(port, () => console.log("Server is listening port " + port + "!"));

module.exports = app;
