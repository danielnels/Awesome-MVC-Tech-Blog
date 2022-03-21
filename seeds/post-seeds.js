const { Post } = require('../models');

const postdata = [{
  title: 'Why bcrypt is so important',
  description: 'Bcrypt hashes users passwords ensuring their credentionals are save.',
  user_id: 1
},
{
  title: 'MVC',
  description: 'MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the softwares business logic and display.',
  user_id: 1
},
{
  title: 'Object Oriented Programming',
  description: 'is a programming paradigm or a style that is mostly focused or centered around objects more than functions and variables. ... In this article we are mostly going to focus on implementation of OOP in JavaScript in Node. js environment.',
  user_id: 2
}
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;