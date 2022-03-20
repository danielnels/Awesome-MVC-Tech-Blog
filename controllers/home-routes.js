const router = require('express').Router();
// eslint-disable-next-line no-unused-vars
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'description',
      'created_at'
    ],
    include: [{
      model: Comment,
      attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
      include: {
        model: User,
        attributes: ['username']
      }
    },
    {
      model: User,
      attributes: ['username']
    }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'description',
      'title',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  console.log(req.session.loggedIn);
  if (req.session.loggedIn) {
    res.redirect('/dashboard/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  console.log(req.session.loggedIn);
  res.render('signup');
});

module.exports = router;

// const router = require('express').Router();
// const { Comment, Post, User } = require('../models');
// const withAuth = require('../utils/auth');

// // Get Homepage
// router.get('/', async (req, res) => {
//   try {
//     const userPostData = await Post.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//     });

//     const userPosts = userPostData.map((post) => post.get({ plain: true }));

//     console.log(userPosts);

//     res.render('homepage', {
//       userPosts,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get One Post - Comments
// router.get('/viewpost/:id', withAuth, async (req, res) => {
//   try {
//     const userPostData = await Post.findOne({
//       where: {
//         id: req.params.id,
//       },
//       attributes: ['id', 'title', 'date', 'content', 'user_id'],
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//         {
//           model: Comment,
//           attributes: ['id', 'date', 'content', 'user_id'],
//           include:
//           {
//             model: User,
//             attributes: ['username'],
//           }
//         },
//       ],
//     })

//     const postData = userPostData.get({ plain: true });

//     console.log(postData);

//     res.render('viewpost', {
//       logged_in: true,
//       userPostData: postData
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get To Make A Post
// router.get('/post', withAuth, async (req, res) => {

//   res.render('post', {
//     logged_in: true
//   });
// });

// //  Get To Edit Post
// router.get('/editpost/:id', withAuth, async (req, res) => {
//   try {
//     const userPostData = await Post.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });

//     const postData = userPostData.get({ plain: true });

//     console.log(postData);

//     res.render('editpost', {
//       logged_in: true,
//       userPostData: postData
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get Dashboard
// router.get('/dashboard', withAuth, async (req, res) => {
//   try {
//     const postsData = await Post.findAll({
//       where: {
//         user_id: req.session.user_id
//       }
//     })

//     const posts = postsData.map(post => post.get({ plain: true }));
//     console.log(posts)
//     res.render('dashboard', {
//       posts,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get Login
// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/dashboard');
//     return;
//   }

//   res.render('login')
// });

// // Get Signup
// router.get('/signup', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/dashboard');
//   }

//   res.render('signup')
// });

// module.exports = router;