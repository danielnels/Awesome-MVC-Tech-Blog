const { Comment } = require('../models');

const commentdata = [{
  comment_text: 'I love using the Bootstart frame-work for positing.',
  user_id: 3,
  post_id: 1
},
{
  comment_text: 'using nodeman is great as i do not have to kill the sever.',
  user_id: 2,
  post_id: 1
},
{
  comment_text: ' bcrypt is important for the security of users!',
  user_id: 3,
  post_id: 2
},
{
  comment_text: 'learing back-end development has been great!',
  user_id: 2,
  post_id: 3
},
{
  comment_text: 'using eslint is a great way to automated editing and save time .',
  user_id: 1,
  post_id: 3
}
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;