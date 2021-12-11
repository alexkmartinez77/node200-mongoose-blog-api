const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');


router.route('/')
  .get((req, res) => {
    Blog.find()
        .then( blog => res.status(200).send(blog) );
    })
  .post((req, res) => {
    newBlog = new Blog(req.body);
    newBlog.save()
           .then(savedBlog => res.status(201).json(savedBlog))
           .catch(err => { res.status(500).json({error:err}); console.log(err)});
});

router.route('/:id')
  .get((req, res) => {
    Blog.findById(req.params.id)
        .then( user =>  user ? res.status(200).json(user) : res.status(404).json({message: `User ${req.params.id} not in database.`}))
    })
  .put((req, res) => {
    Blog.findByIdAndUpdate(req.params.id)
        .then( blog => {res.status(200).json(blog); console.log(`User ${req.params.id} has been updated.`)})
    })
  .delete((req, res) => {
    Blog.findByIdAndRemove(req.params.id)
        .then( blog => {res.status(200).json(blog); console.log(`User ${req.params.id} has been deleted.`)})
    });

/*router.get('/featured', (req,res) => {
  console.log('*****************************INSIDE FEATURED**********************************')
  Blog.find({title: "Hello Word"})
      .then(featuredBlogs => {res.status(200).json(featuredBlogs)});
  });*/

module.exports = router;