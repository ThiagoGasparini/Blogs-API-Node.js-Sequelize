const postService = require('../services/post');
const { BlogPost } = require('../models');

const getPosts = async (_req, res) => {
  const result = await postService.getPosts();

  return res.status(200).json(result);
};

const getPostId = async (req, res) => {
  const { id } = req.params;

  const findId = await BlogPost.findByPk(id);
  if (!findId) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  const result = await postService.getPostId(id);

  return res.status(200).json(result);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const result = await postService.updatePost({ id, title, content });

  return res.status(200).json(result);
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  const result = await BlogPost.findByPk(id);

  if (!result) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  await postService.deletePost(id);

  return res.status(204).send();
};

module.exports = {
  getPosts,
  getPostId,
  updatePost,
  deletePost,
};