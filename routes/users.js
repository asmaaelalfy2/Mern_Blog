const express = require('express');

const router = express.Router();

const bcrypt = require('bcryptjs');

const User = require('../models/User');

const { check, validationResult } = require('express-validator');



//@routes POST /api/users
//@desc Register user
//@access public

router.post(
  '/',

  [
    check('firstname', 'Please add firstname').not().isEmpty(),
    check('lastname', 'Please add lastname').not().isEmpty(),
    check('email', 'Please add a valid email').isEmail(),
    check('password', 'password should be more than 6 chars').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, firstname, lastname, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'user already exists' });
      }
      user = new User({  firstname, lastname,email, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      user.save();
      res.send('saved');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

//@routes Get /api/users
//@desc  get all users
//@access private

router.get('/', (req, res) => {
  res.send('get all users');
});

//@routes   get/api/users/:userId
//@desc get specific user
//@access private

router.get('/:userId', (req, res) => {
  res.send('get specific user');
});

module.exports = router;
