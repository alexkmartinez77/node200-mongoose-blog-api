const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.route('/')
  .get((req, res) => {
    User.find()
        .then( users => res.status(200).json(users) )
        .catch(err => { res.status(500).json({error:err}); console.log(err)});
  })
  .post((req, res) => {
    const newUser = new User(req.body);
    newUser.save()
           .then(savedUser => res.status(201).json(savedUser))
           .catch(err => { res.status(500).json({error:err}); console.log(err)});
  });

router.route('/:id')
  .get((req, res) => {
    User.findById(req.params.id)
        .then( user =>  user ? res.status(200).json(user) : res.status(404).json({message: `User ${req.params.id} is not in the database.`}))
        .catch(err => { res.status(500).json({error:err}); console.log(err)});
  })
  .post((req, res) => {

    })
  .put((req, res) => {
    User.findByIdAndUpdate(req.params.id)
        .then( user => res.status(200).json(user))
    })
  .delete((req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then( user => res.status(200).json(user))
    });
  
module.exports = router;