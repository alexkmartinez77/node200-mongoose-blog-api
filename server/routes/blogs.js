const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');


router.route('/')
  .get((req, res) => {
    Blog.find()
        .then( blog => res.status(200).send(blog) );
    })
  .post((req, res) => {

    });

router.route('/:id')
  .get((req, res) => {
    Blog.findById(req.params.id)
    .then( blog => {res.status(200).json(blog); console.log(`User ${req.params.id} has been found.`)})
    })
  .put((req, res) => {
    Blog.findByIdAndUpdate(req.params.id)
    .then( blog => {res.status(200).json(blog); console.log(`User ${req.params.id} has been updated.`)})
    })
  .delete((req, res) => {
    Blog.findByIdAndRemove(req.params.id)
    .then( blog => {res.status(200).json(blog); console.log(`User ${req.params.id} has been deleted.`)})
    });

router.get('/featured', (req, res) => {
    Blog.where()
        .then();
})

module.exports = router;