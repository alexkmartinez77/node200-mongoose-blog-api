const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.route('/')
  .get((req, res) => {
    User.find()
        .then( users => res.status(200).json(users) );
  })
  .post((req, res) => {
  })

router.route('/:id')
  .get((req, res) => {
    User.findById(req.body.id)
        .then( user => {res.status(200).json(user); console.log(`User ${req.body.id} has been found.`)})
    })
  .post((req, res) => {
    User.findByIdAndUpdate(req.body.id)
        .then( user => {res.status(200).json(user); console.log(`User ${req.body.id} has been added.`)})
    })
  .delete((req, res) => {
    User.findByIdAndRemove(req.body.id)
        .then( user => {res.status(200).json(user); console.log(`User ${req.body.id} has been removed.`)})
    })

module.exports = router;