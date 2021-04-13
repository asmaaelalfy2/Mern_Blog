const express = require('express');

const router = express.Router();

const Blog = require('../models/Blog');
const auth = require('../middleware/auth');

//@routes Get /api/blogs
//@desc Get all blogs
//@access public

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.json({ message: err });
  }
});

// @routes Post /api/blogs
// @desc add blog
// @access private

router.post('/', auth, async (req, res) => {
  let tags = [];
  if (req.body.tags) {
    tags = req.body.tags.split(',');
  }

  const blog = new Blog({
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body,
    tags: tags,
  });

  try {
    const savedBlog = await blog.save();
    res.json(savedBlog);
  } catch (err) {
    res.json({ message: err });
  }
});

// @routes Get /api/blogs/user/:userId
// @desc Get  specific user blog
// @access public
router.get('/user/:userId', async (req, res) => {
  console.log(req.params.userId);
  try {
    const blog = await Blog.find({ userId: req.params.userId });
    res.json(blog);
  } catch (err) {
    res.json({ message: err });
  }
});

//@routes Get /api/blogs/:blogId
//@desc Get  blog by its id
//@access public

router.get('/:blogId', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);
    res.json(blog);
  } catch (err) {
    res.json({ message: err });
  }
});

//@routes delete /api/blogs/:blogId
//@desc delete  specific blog
//@access private

router.delete('/:blogId', auth, async (req, res) => {
  try {
    const removedBlog = await Blog.deleteOne({ _id: req.params.blogId });
    res.json(removedBlog);
  } catch (err) {
    res.json({ message: err });
  }
});

//@routes Put /api/blogs/:blogId
//@desc update specific blog
//@access private

router.put('/:blogId', auth, async (req, res) => {
  let tags = [];
  if (req.body.tags) {
    tags = req.body.tags.split(',');
  }

  const blog = new Blog({
    _id: req.params.blogId,
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body,
    tags: tags,
  });
  Blog.updateOne({ _id: req.params.blogId }, blog)
    .then((b) => {
      console.log(b);
      res.json(blog);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
