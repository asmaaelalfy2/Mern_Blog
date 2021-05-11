const express = require('express');

const router = express.Router();

const Blog = require('../models/Blog');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
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

router.post('/', [auth], async (req, res) => {
  let tags = [];
  if (req.body.tags) {
    tags = req.body.tags.split(',');
  }

  const blog = new Blog({
    userId: req.user.id,
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
router.get('/:user/:userId', async (req, res) => {
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

// router.put('/:blogId', auth, async (req, res) => {
//   // let tags = [];
//   // if (req.body.tags) {
//   //   tags = req.body.tags.split(',');
//   // }

//   const blog = new Blog({
//     _id: req.params.blogId,
//     userId: req.user.id,
//     title: req.body.title,
//     body: req.body.body,
//     tags: tags,
//   });
//   await Blog.updateOne({ _id: req.params.blogId }, blog)
//     .then((b) => {
//       console.log(b);
//       res.json(blog);
//     })
//     .catch((err) => {
//       res.json({ message: err });
//     });
// });

router.put('/:blogId', auth, async (req, res) => {
  try {
    const blogfind = await Blog.findById(req.params.blogId);
    if (!blogfind) {
      return res.status(400).json({ msg: 'blog not found' });
    }
    const blogUpdate = await Blog.findByIdAndUpdate(
      req.params.blogId,

      req.body,
      { new: true }
    );
    const blogSaved = await blogUpdate.save();
    res.json(blogSaved);
  } catch (error) {
    console.error(error.msg);
    res.status(500).send('server errors');
  }
});

// router.get('/blogs/:user/:userId', async (req, res) => {
//   try {
//     const blogs = await Task.find({ user: req.params.userId }).sort({
//       date: -1,
//     });
//     if (!blogs) {
//       res.status(404).send('No Blogs');
//     }
//     res.status(201).send(blogs);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

module.exports = router;
