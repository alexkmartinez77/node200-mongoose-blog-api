const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.route('/')
  .get((req, res) => {
    User.find()
        .then( users => res.status(200).json(users) );
  })
  .post((req, res) => {
  });

router.route('/:id')
  .get((req, res) => {
    User.findById(req.params.id)
        .then( user => {res.status(200).json(user); console.log(`User ${req.params.id} has been found.`)})
    })
  .post((req, res) => {

    })
  .put((req, res) => {
    User.findByIdAndUpdate(req.params.id)
        .then( user => {res.status(200).json(user); console.log(`User ${req.params.id} has been updated.`)})
    })
  .delete((req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then( user => {res.status(200).json(user); console.log(`User ${req.params.id} has been removed.`)})
    });

module.exports = router;