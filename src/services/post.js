const { BlogPost, Category, User } = require('../models');

const getPosts = async () => {
  const result = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    }, {
      model: Category,
      as: 'categories',
    }],
  });

  return result;
};

const getPostId = async (id) => {
  const result = await BlogPost.findByPk(id, {
    include: [{
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    }, {
      model: Category,
      as: 'categories',
    }],
  });

  return result;
};

const updatePost = async ({ id, title, content }) => {
  const updatedPost = await getPostId(id);

  const result = await updatedPost.update({ title, content });

  return result;
};

const deletePost = async (id) => {
  await BlogPost.destroy({
    where: { id },
  });
};

module.exports = {
  getPosts,
  getPostId,
  updatePost,
  deletePost,
};