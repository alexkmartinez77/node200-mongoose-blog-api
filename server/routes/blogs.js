const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Blog = require('../models/Blog');
const User = require('../models/User');


router.route('/')
  .get((req, res) => {
    Blog.find()
        .then( blog => res.status(200).send(blog) )
        .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
    })
  .post((req, res) => {
    User.findById(req.body.author)
        .then(user => {
            const newBlog = new Blog(req.body);
            newBlog.save()
                   .then(blog => {
                     user.blogs.push(blog);
                     user.save();
                     res.status(201).json(blog)});
        })
        .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
      });

router.route('/:id')
  .get((req, res) => {
    Blog.findById(req.params.id)
        .then( user =>  user ? res.status(200).json(user) : res.status(404).json({message: `User ${req.params.id} not in database.`}))
        .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
    })
  .put((req, res) => {
    console.log('req.body', req.body);
    console.log('req.params.id', req.params.id);

    Blog.findById(req.params.id)
        .then(blog => console.log('Blog before', blog));

    Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then( blog => {
          blog.article = "New article description"
          blog.save()
              .then(blog => {console.log('blog after', blog); res.status(204).send(blog)});
        })
        .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
    })
  .delete((req, res) => {
    Blog.findByIdAndRemove(req.params.id)
        .then( blog => {res.status(200).json(blog); console.log(`User ${req.params.id} has been deleted.`)})
        .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
    });

/*router.get('/featured', (req,res) => {
  console.log('*****************************INSIDE FEATURED**********************************')
  Blog.find({title: "Hello Word"})
      .then(featuredBlogs => {res.status(200).json(featuredBlogs)});
  });*/

module.exports = router;