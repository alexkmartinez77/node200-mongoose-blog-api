const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/users');
const blogs = require('./routes/blogs');
require('dotenv').config()

const app = express();

app.use(bodyParser.json());
app.use('/api/users', users);
app.use('/api/blogs', blogs);

//Instructs mongoose to connect to local mongoDB instance
//mongoose.connect('mongodb://localhost/myblog');

//Instructs mongoose to connect to MongoDb Atlas
mongoose.connect(`mongodb+srv://alexkmartinez77:${process.env.mongoDBAtlas}@sdcsblogapi.j9ckx.mongodb.net/scsblogapi?retryWrites=true`);

//needed for async operations
mongoose.Promise = Promise;


//routes
app.get('/', (req, res) => {
  res.status(200).send('Server is running. Use postman to access Blog API.');
});

module.exports = app;