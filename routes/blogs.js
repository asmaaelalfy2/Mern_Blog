const express = require('express');

const router = express.Router();

//@routes Get /api/blogs
//@desc Get all blogs
//@access public

router.get('/', (req, res) => {
  res.send('get all blogs');
});

//@routes Post /api/blogs
//@desc Get all blogs
//@access private

router.post('/', (req, res) => {
  res.send('add  blog');
});

//@routes Put /api/blogs/:blogId
//@desc update all blogs
//@access private

router.put('/:blogId', (req, res) => {
  res.send('update  blog');
});

//@routes Delete /api/blogs/:blogId
//@desc delete specific  blog
//@access private

router.delete('/:blogId', (req, res) => {
  res.send('delete specific blog');
});

module.exports = router;
