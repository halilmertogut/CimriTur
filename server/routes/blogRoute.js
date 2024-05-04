const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog'); // Path should match where your model file is located.

// Create a blog post
router.post('/', async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).send(blog);
  } catch (error) {
    res.status(400).send({ message: 'Error creating the blog', error: error.message });
  }
});

// Retrieve all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).send(blogs);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching blogs', error: error.message });
  }
});

// Retrieve a single blog post by id
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send();
    }
    res.status(200).send(blog);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching the blog', error: error.message });
  }
});

// Update a blog post
router.put('/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title', 'content', 'blogType'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!blog) {
      return res.status(404).send();
    }
    res.send(blog);
  } catch (error) {
    res.status(400).send({ message: 'Error updating the blog', error: error.message });
  }
});

// Delete a blog post
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).send();
    }
    res.send(blog);
  } catch (error) {
    res.status(500).send({ message: 'Error deleting the blog', error: error.message });
  }
});

module.exports = router;
