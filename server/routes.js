const express = require('express');
const router = express.Router();
const { models: { Blog, Blogger } } = require('./db');

router.get('/blogs', async(req, res, next) => {
  try {
    const blogs = await Blog.findAll({
      include: [
        { model: Blogger }
      ]
    });
    res.send(blogs);
  } catch(err) {
    next(err)
  }
});

router.get('/bloggers', async(req, res, next) => {
  try {
    const bloggers = await Blogger.findAll({
      include: [
        { model: Blog }
      ]
    });
    res.send(bloggers)
  } catch(err) {
    next(err)
  }
});

module.exports = router;
