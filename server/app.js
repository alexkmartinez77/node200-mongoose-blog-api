const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/users')

const app = express();

app.use(bodyParser.json());
//respond with all users at the /api/users route
app.use('/api/users', users);
//Instructs mongoose to connect to local mongoDB instance
mongoose.connect('mongodb://localhost/myblog');
//needed for async operations
mongoose.Promise = Promise;


//routes
app.get('/', (req, res) => {
  res.status(200).send();
});

module.exports = app;