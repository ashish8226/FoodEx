const express = require('express')
const Blog = require('../models/blog');
const router = express.Router();


router.route('/')
  .get(async (req, res) => {
      try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
      } catch (err) {
        res.send(400).json(err);
      }
    }
  )
  .post(async (req, res) => {
    const blog = new Blog(req.body);
    try {
      await blog.save();
      res.status(201).json(blog);
    } catch (err) {
      res.status(401).json(err);
    }
  })


module.exports = router;
