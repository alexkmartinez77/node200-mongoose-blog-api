const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
//Instructs mongoose to connect to local mongoDB instance
mongoose.connect('mongodb://localhost/myblog', { useMongoClient: true });
//needed for async operations
mongoose.promise = promise;


//routes
app.get('/', (req, res) => {
  res.status(200).send();
});

module.exports = app;