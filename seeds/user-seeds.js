const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [{
        username: 'dannels',
        email: 'dn@gmail.com',
        password: '123456'
    },
    {
        username: 'marleyn',
        email: 'mn@gmail.com',
        password: '123456'
    },
    {
        username: 'kristenn',
        email: 'kn@gmail.com',
        password: '123456'
    },
    {
        username: 'jackn',
        email: 'jack@gmail.com',
        password: '123456'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;