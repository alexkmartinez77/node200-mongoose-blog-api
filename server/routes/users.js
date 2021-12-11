const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.route('/')
  .get((req, res) => {
    User.find()
        .then( users => res.status(200).json(users) )
        .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
      })
  .post((req, res) => {
    const newUser = new User(req.body);
    newUser.save()
           .then( savedUser => res.status(201).json(savedUser) )
           .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
      });

router.route('/:id')
  .get((req, res) => {
    User.findById(req.params.id)
        .then( user =>  user ? res.status(200).json(user) : res.status(404).json({message: `User ${req.params.id} is not in the database.`}))
        .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
      })
  .put((req, res) => {
    User.findByIdAndUpdate(req.params.id)
        .then( user => res.status(200).json(user))
        .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
      })
  .delete((req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then( user => res.status(200).json(user))
        .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
      });
  
module.exports = router;